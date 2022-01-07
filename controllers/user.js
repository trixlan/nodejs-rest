const { response, request } = require('express');
const Usuario = require('../models/usuario');

const usuariosGet = async(req = request, res = response) => {

    const usuarios = await Usuario.find();

    res.json({
        usuarios
    });
}

const usuariosPost = async(req, res = response) => {

    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        msg: 'Post API - usuariosPost',
        usuario
    })
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { ...resto } = req.body;

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut
}