//Entre aqui as credenciais do aluno
var aluno =   {
    "nome": "Nome do Aluno",
    "email": "aluno@email.com"
}


//Entre aqui as credenciais do professor
var professor =   {
    "nome": "Nome do Professor",
    "email": "professor@email.com"
}

//Entre aqui as credenciais de conexão com o LRS
var xapi ={
    headers: {
        "Content-Type": "application/json",
        "X-Experience-API-Version": "1.0.3",
        "Authorization": "Basic M2QzYTZiNWJkY2UyOWQ",
      },
      endpoint: "https://xapi.xyz/data/xAPI/statements"
}