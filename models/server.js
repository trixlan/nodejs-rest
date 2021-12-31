const express = require('express');
const port = 3000;

class Server {

    constructor() {
        this.app = express();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/user'));
    }

    listen() {
        this.app.listen(port, () => {
            console.log(`El servidor esta inicializado en el puerto ${port}`);
        });
    }

}

module.exports = Server;