// Criação de rota (o que o usuário vai acessar pelo navegador)
const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

// Separando a parte de rotas da parte principal
const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
// Importando as rotas

// Dentro da API REST temos 4 métodos principais:
// GET (para buscar informações da API)
// POST (para criar alguma coisa)
// PUT (para editar informações)
// DELETE (para remover um dado)

routes.post("/boxes", BoxController.store); // Passando o método store do controller
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerConfig).single("file"), FileController.store);
// O ":id" permite enviar um parâmetro do usuário

module.exports = routes;
