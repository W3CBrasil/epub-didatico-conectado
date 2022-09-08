<h1 align="center">
    <img src="https://ceweb.br/assets/img/logo-ceweb-br.png" alt="Logo do Ceweb"/>
</h1>

# Connected Didactic ePub
Area for the experiment development

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
![HTML5](https://img.shields.io/badge/HTML-5-green)
![CSS](https://img.shields.io/badge/CSS-3-green)
![ECMAScript](https://img.shields.io/badge/ECMAScript-6-green)
![EPUB](https://img.shields.io/badge/EPUB-3-blue)
![xAPI](https://img.shields.io/badge/xAPI-1.0.3-blue)

Connected Didactic ePub is an experiment using Web standards, semantics, metadata, digital accessibility and APIs for data communication.

## To use this model

For a quick and safe result, we recommend using the open code editor for ePub  **Sigil**: 

https://sigil-ebook.com/sigil/download/

## To test the connection of educational data with xAPI

To share educational data, we use **xAPI** Standard API REST

https://xapi.com/overview/

As a repository of xAPI data, we use the open code LRS  **Learning Locker**

https://github.com/LearningLocker/learninglocker

## To test ePub accessibility
According to the recommendation on the DAISY consortium 

https://daisy.org/activities/software/ace/

## Publication credits
The ePub developed in this project derives from the PDF version of the publication Livro de Frações, developed by Projeto Livro Aberto de Matemática (OBMEP/IMPA).
---

 # What do I need to do to make it work?

 The file **.epub** is ready to work in any electronic book reader that supports EPUB3 of W3C.

  Some suggestions:

**Thorium Reader**
https://www.edrlab.org/software/thorium-reader/

**Lithium: Lithium: ePub reader**
https://play.google.com/store/apps/details?id=com.faultexception.reader&hl=pt_BR&gl=US

## What should I edit to record the questions on the remote database?

In the file `misc/credenciais.js` you can edit students’ and teachers’ data, and the xAPI endpoint, provided by the LRS repository of your preference.

```js
var aluno =   {
    "nome": "Student’s name",
    "email": "student@email.com"
}

var professor =   {
    "nome": "Teacher’s name",
    "email": "teacher@email.com"
}

var xapi ={
    headers: {
        "Content-Type": "application/json",
        "X-Experience-API-Version": "1.0.3",
        "Authorization": "Basic M2QzYTZiNWJkY2UyOWQ",
      },
      endpoint: "https://xapi.xyz/data/xAPI/statements"
}
```

Each of the chapters on the book has a script related to its interactivity. In this project, the credentials are already related to each script, but it is important to highlight that, for new books, you will also need to alter the .js files inside the folder misc/

Documentation about the project and a step-by-step of the installation process are available [here](https://github.com/W3CBrasil/epub-didatico-conectado/blob/master/Implementation%20Documentation%20-%20EduPub.pdf)
