const Box = require('../models/Box');

class BoxController {
// 'req' representa a requisição feita para o servidor
// 'res' é o retorno da requisição (pode ser um dado ou simplesmente uma
// mensagem de "Finish")
  async store(req, res) { // Função para criar Boxes dentro da aplicação
    // req.body é o corpo da requisição (JSON)
    const box = Box.create(req.body);

    return res.json(box);
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      options: { sort: { createdAt: -1 } }
    });

    return res.json(box);
  }
}

module.exports = new BoxController();
// O new é necessário pois sem ele o módulo exportaria
// a classe e não a instancia da classe
