/** Key value pairs using quiz element IDs and Quiz Objects.
 * For example: quizzes['quiz-1'] = [Quiz Object]
 */
var quizzes = {};

/**
 * Callback for answer buttons. The implementation for this will vary depending on your requirements.
 * In this example, the same function is being used for every quiz so we pass the ID of the quiz element and
 * retrieve the respective quiz instance from the quiz map we created in the window.onload function.
 */
function showResults(quizID) {
  // Retrieve the quiz instance for this quiz element from the map.
  var activeQuiz = quizzes[quizID];
  // Check answers and continue if all questions have been answered
  if (activeQuiz.checkAnswers()) {
    var quizScorePercent = activeQuiz.result.scorePercentFormatted; // The unformatted percentage is a decimal in range 0 - 1
    var quizResultElement = document.getElementById("quiz-result");
    // Move the quiz result element to the active quiz, placing it after the quiz title.
    var quizElement = document.getElementById(quizID);
    quizElement.insertBefore(quizResultElement, quizElement.lastChild);

    // Show the result element and add result values.
    quizResultElement.style.display = "block";
    document.getElementById("quiz-score").innerHTML =
      activeQuiz.result.score.toString();
    document.getElementById("quiz-max-score").innerHTML =
      activeQuiz.result.totalQuestions.toString();
    document.getElementById("quiz-percent").innerHTML =
      quizScorePercent.toString();

    // Change background colour of results div according to score percent
    if (quizScorePercent >= 75)
      quizResultElement.style.backgroundColor = "#3A863D";
    else if (quizScorePercent >= 50)
      quizResultElement.style.backgroundColor = "#ffc107";
    else if (quizScorePercent >= 25)
      quizResultElement.style.backgroundColor = "#ff9800";
    else if (quizScorePercent >= 0)
      quizResultElement.style.backgroundColor = "#f44336";

    // Highlight questions according to whether they were correctly answered. The callback allows us to highlight/show the correct answer
    activeQuiz.highlightResults(handleAnswers);
  }
}

/** Callback for Quiz.highlightResults. Highlights the correct answers of incorrectly answered questions
 * Parameters are: the quiz object, the question element, question number, correctly answered flag
 */
function handleAnswers(quiz, question, no, correct) {


  var licao = document.querySelector("h1.title").innerText;

  var idAtividadeSplit = quiz.container.id.split('-');
  var atividadeId = idAtividadeSplit[0]+"-"+idAtividadeSplit[1]
  var atividade = document.querySelector('#'+atividadeId).innerText;


  var  data = {
    "actor": {
      "name": aluno.nome,
      "mbox": "mailto:"+aluno.email
    },
    "verb": {
      "id": "http://adlnet.gov/expapi/verbs/answered",
      "display": {"pt-BR": "respondeu" }
    },
    "object": {
      "id": "epub://livro-de-fracoes/OEBPS/licao01-aluno.xhtml#"+quiz.container.id,
      "definition": {
        "type": "http://adlnet.gov/expapi/activities/question",
        "name": { "pt-BR": licao+" - "+atividade+" - Questão "+(no+1)},
        "description": {
          "pt-BR": question.querySelector('.quizlib-question-title').innerText
        }
      }
    },
    "result": {
      "success": correct,
      "response":question.querySelector('input').value
    },
    "context": {
      "instructor": {
        "name": professor.nome,
        "mbox": "mailto:"+professor.email
    }},
    "timestamp": new Date().toISOString(),
    "authority": {
      "name": professor.nome,
      "mbox": "mailto:"+professor.email
    }
  };

  console.log(aluno.nome);
  
  fetch(xapi.endpoint, {
    method: 'POST',
    headers: xapi.headers,
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  //Then with the data from the response in JSON...
  .then((data) => {
    console.log('Success:', data);
  })
  //Then with the error genereted...
  .catch((error) => {
    console.error('Error:', error);
  });


  if (!correct) {
    var answers = question.getElementsByTagName("input");
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].type === "checkbox" || answers[i].type === "radio") {
        // If the current input element is part of the correct answer, highlight it
        if (quiz.answers[no].indexOf(answers[i].value) > -1) {
          answers[i].parentNode.classList.add(Quiz.Classes.CORRECT);
        }
      } else {
        // If the input is anything other than a checkbox or radio button, show the correct answer next to the element
        var correctAnswer = document.createElement("div");
        correctAnswer.classList.add(Quiz.Classes.CORRECT);
        correctAnswer.classList.add(Quiz.Classes.TEMP); // quiz.checkAnswers will automatically remove elements with the temp class
        correctAnswer.innerHTML = quiz.answers[no];
        correctAnswer.style.marginLeft = "10px";
        correctAnswer.style.marginTop = "10px";
        answers[i].parentNode.insertBefore(
          correctAnswer,
          answers[i].nextSibling
        );
      }
    }
  }
}

window.onload = function () {
  // Create quiz instances for each quiz and add them to the quizzes map.
  // The key is the ID of the quiz element, same as what we pass to the Quiz object as the first argument.

 
  //Respostas da Atividade 2

  quizzes["chap2-ativ5-ex1"] = new Quiz("chap2-ativ5-ex1", ["2/3","2/2","2/5","9/2","8/6"]);

  quizzes["chap2-ativ8-ex1"] = new Quiz("chap2-ativ8-ex1", ["a","b","c"]);

  quizzes["chap2-ativ15-ex1"] = new Quiz("chap2-ativ15-ex1", ["1/2","1/4","1/6","3/2","3/4"," 1/2 ou 3/6","5/2","5/4","5/6","3 ou 6/2","3/2 ou 6/4","1 ou 3/3 ou 6/6"]);

  quizzes["chap2-ativ20-ex1"] = new Quiz("chap2-ativ20-ex1", ["4","6/8 ou 38/8","b"]);



};
