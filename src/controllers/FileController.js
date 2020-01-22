const File = require('../models/File');
const Box = require('../models/Box');

class FileController {
// 'req' representa a requisição feita para o servidor
// 'res' é o retorno da requisição (pode ser um dado ou simplesmente uma
// mensagem de "Finish")
  async store(req, res) {
    const box = await Box.findById(req.params.id); // Encontra o box para associação do arquivo

    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    });

    box.files.push(file);

    await box.save();
    // Criar um arquivo

    req.io.sockets.in(box._id).emit('file', file);

    return res.json(file);
  }
}

module.exports = new FileController();
// O new é necessário pois sem ele o módulo exportaria
// a classe e não a instancia da classe
