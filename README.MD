💻 Projeto API REST

- Para instalar as dependencias:

yarn add  / npm install

Dependencias utilizadas no projeto:

"dependencies": {
    "cors": "^2.8.5", -- 
    "express": "^4.17.2",
    "mongoose": "^6.1.7"
  },

"devDependencies": {
    "nodemon": "^2.0.15"
  },


- Para executar o servidor:

"scripts": {
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

yarn dev / npm dev


Testando as rotas 

## Estamos utilizando o MongoDB como banco de dados NoSQL.##

Abra o Insomnia/Postman 

POST: http://localhost:3003/users/register
Body: {
	"firstName": "Gabrielle",
	"lastName": "Tavares",
	"age": 21,
	"email": "GabrielleTa@gmail.com",
	"tel": "(11)965254533"
}

GET: http://localhost:3003/users/61e7762b06e53363f6158e60
PUT: http://localhost:3003/users/61e7762b06e53363f6158e60
Body: {

	"lastName": "Souza Tavares"

}

DELETE: http://localhost:3003/users/61e7762b06e53363f6158e60


- Verifique a inserção dos usuários no MongoDB
