[Use this link for content in english](https://github.com/W3CBrasil/epub-didatico-conectado/blob/master/README-en.md)

<h1 align="center">
    <img src="https://ceweb.br/assets/img/logo-ceweb-br.png" alt="Logo do Ceweb"/>
</h1>

# ePUB Didático Conectado
Espaço para desenvolvimento do experimento

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
![HTML5](https://img.shields.io/badge/HTML-5-green)
![CSS](https://img.shields.io/badge/CSS-3-green)
![ECMAScript](https://img.shields.io/badge/ECMAScript-6-green)
![EPUB](https://img.shields.io/badge/EPUB-3-blue)
![xAPI](https://img.shields.io/badge/xAPI-1.0.3-blue)

O ePUB Didático Conectado é um experimento untilizando padrões web, semântica, metadados, acessibilidade digital e APIs para comunicação de dados. 


## Para utilizar este modelo

Para um resultado mais rápido e seguro, nós recomendamos utlizar o editor de código aberto para ePUB **Sigil**: 

https://sigil-ebook.com/sigil/download/

## Para testar as conexões de dados educacionais com xAPI 

Para troca de dados educacionais, utilizamos a API REST padrão **xAPI** 

https://xapi.com/overview/

Como repositório de dados xAPI, utilizamos o LRS de código aberto **Learning Locker**

https://github.com/LearningLocker/learninglocker

## Para testar a acessibilidade do ePUB 
Segundo a recomendação do consórcio DAISY

https://daisy.org/activities/software/ace/

## Créditos da publicação
O ePub desenvolvido neste projeto é uma derivação da versão em PDF do Livro de Frações do Projeto Livro Aberto de Matemática (OBMEP/IMPA)

---

 # O que devo fazer para funcionar?

 O arquivo **.epub** está pronto para funcionar em qualquer
 leitor de livros eletrônicos que suporte os padrões de
  EPUB3 do W3C.

  Algumas sugestões:

**Thorium Reader**
https://www.edrlab.org/software/thorium-reader/

**Lithium: Lithium: Leitor de EPUB**
https://play.google.com/store/apps/details?id=com.faultexception.reader&hl=pt_BR&gl=US

## O que devo editar para gravar as questões no banco de dados remoto?

No arquivo `misc/credenciais.js` você pode editar os dados de 
aluno, professor e *endpoint* da xAPI, fornecido pelo repositório LRS
de sua preferência. 

```js
var aluno =   {
    "nome": "Nome do Aluno",
    "email": "aluno@email.com"
}

var professor =   {
    "nome": "Nome do Professor",
    "email": "professor@email.com"
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

Cada um dos capítulos do livro tem um script relacionado a toda sua interatividade. Para este projeto as credenciais já estão relacionadas a cada script, mas é importante ressaltar que para novos livros é necessário alterar também os arquivos .js. dentro da pasta `misc/`


Documentação sobre o projeto e passo a passo de instalação está disponível em [aqui](https://github.com/W3CBrasil/epub-didatico-conectado/blob/master/Documenta%C3%A7%C3%A3o%20de%20Implementa%C3%A7%C3%A3o%20-%20ePub%20Did%C3%A1tico%20Conectado.pdf)
