const multer = require('multer');
const path = require('path');
const crypto = require('crypto'); // Gera hash ou conjunto de caracteres únicos

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp'), // Padroniza a escrita dos caminhos no Node.js
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp'));
    },
    filename: (req, file, callback) => { // Deve ser criado um nome único para o arquivo
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);

        file.key = `${hash.toString('hex')}-${file.originalname}`;

        callback(null, file.key);
      })
    }
  })
};
