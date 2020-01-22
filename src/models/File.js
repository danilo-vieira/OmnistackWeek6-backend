// Mongoose serve para criar uma representação da tabela no banco de dados
const mongoose = require('mongoose');

const File = new mongoose.Schema({
  title: { // Como é um dado obrigatório, precisa-se do required
    type: String,
    required: true
  },
  path: { // Nome do arquivo físico armazenado na aplicação
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});
// timestamps faz criar automaticamente um campo chamado created_at
// e outro chamado updated_at em cada registro da tabela

File.virtual("url").get(function() {
  const url = process.env.URL || "http://localhost:3333"

  return `${url}/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model('File', File);
// Definindo o nome do model e passando o model criado por parâmetro
