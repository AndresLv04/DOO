const person = require('../models/person');

class ServerController {
    constructor() {
    }

    //Obtiene todos los registros de la colección de la base de datos NoSQL
    async getAllUsers(req, res) {
        try {
            const data = await person.find();  // Await the promise returned by .find()
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send({ error: "Error retrieving users from the database" });
        }
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