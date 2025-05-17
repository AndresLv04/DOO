const person = require('../models/person');

class ServerController {
    constructor() {
    }

    //Obtiene todos los registros de la colección de la base de datos NoSQL
    getAllUsers(req, res) {
        person.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    //Obtiene el registro según el id que le estemos pasando a la colección de la base de datos NoSQL
    getUsers(req, res) {
        let id = req.params.id;
        person.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = ServerController;