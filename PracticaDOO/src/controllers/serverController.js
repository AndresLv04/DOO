const person = require('../models/person');

class ServerController {
    constructor() {
    }

    //Obtiene todos los registros de la colección de la base de datos NoSQL
    async getAllUsers(req, res) {
        try {
            const data = await person.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send({ error: "Error retrieving users from the database" });
        }
    }


    //Obtiene el registro según el id que le estemos pasando a la colección de la base de datos NoSQL
    async getUsers(req, res) {
        let id = req.params.id;
        try {
            let data = await person.findById(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send();
        }
    }

    async register (req, res){
        const nuevoUsuario = new person(req.body);
        const guardarUsario = await nuevoUsuario.save();
        if(guardarUsario){
            res.status(201).json(guardarUsario);
        }else{
            res.status(500).json({error: 'Error al guardar el usuario'});
        }
    }

    async update(req, res){
        let id = req.params.id;
        let datos = req.body;

        let usuarioActualizar = await person.findByIdAndUpdate(id, datos, {new: true});

        if(usuarioActualizar){
            res.status(200).json({ message: "Usuario actualizado correctamente" });
        }else{
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    }

    //Elimina a un registro según el id que le pasemos  a la colección de BD NoSQL
    async deleteUser(req, res){
        let id = req.params.id

        let deleteUser = await person.findByIdAndDelete(id);

        if(deleteUser){
            res.status(200).json({message: "Usuario con id: " + id + " fue eliminado correctamente"});
        }else{
            res.status(404).json({message: "Usuario con id: " + id + " no fue encontrado"});
        }

    }

    

}

exports.default = ServerController;