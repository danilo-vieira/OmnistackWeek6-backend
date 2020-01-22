// Mongoose serve para criar uma representação da tabela no banco de dados
const mongoose = require('mongoose');

const Box = new mongoose.Schema({
  title: { // Como é um dado obrigatório, precisa-se do required
    type: String,
    required: true
  },
  // É um array com outros models
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }], // Armazena apenas os Id's dos models
}, {
  timestamps: true
});
// timestamps faz criar automaticamente um campo chamado createdAt
// e outro chamado updatedAt em cada registro da tabela

module.exports = mongoose.model('Box', Box);
// Definindo o nome do model e passando o model criado por parâmetro
