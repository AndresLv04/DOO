const express = require('express');
const serverController = require("../controller/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
    }
}

exports.default = ServerRouter;
