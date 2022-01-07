const express = require('express');
const port = 3000;
const {dbConnection} = require('../database/config');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();

        //Conectar a base de datos
        this.connectarDB();
    }

    async connectarDB() {
        await dbConnection();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(port, () => {
            console.log(`El servidor esta inicializado en el puerto ${port}`);
        });
    }

}

module.exports = Server;