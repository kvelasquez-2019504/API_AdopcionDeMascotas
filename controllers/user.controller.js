const {response}=require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet=async(req, res=response)=>{
    const {limite,desde}=req.query;//estps son query params, parametros.
    const query={estado:true};
    const [total,usuarios]=await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
        .skip(Number(desde))
        .limit(Number(limite)),
    ]);
    res.status(200).json({
        total,usuarios
    });
}

const getUsuarioById = async(req,res)=>{
    const {id}=req.params;
    const usuario = await Usuario.findOne({_id:id});
    res.status(200).json({
        usuario
    });
}

const usuariosDelete = async (req,res)=>{
    const {id }= req.params;
    const usuario =await Usuario.findByIdAndUpdate(id,{estado:false});
    res.status(200).json({
        msg:"Usuario eliminado existosamente"
    });
}

const usuariosPut = async (req, res)=>{
    const {id}=req.params;
    //... dice que el resto de atributos puede ser actualizable
    const {_id, password,google,correo, ...resto}=req.body;
    const usuario = await Usuario.findByIdAndUpdate(id,resto);
    res.status(200).json({
        msg:"Usuario actualizado exitosamente"
    });
}

const usuariosPost=async (req,res)=>{
    //aqui necesito el body que se coloco en postman
    const{nombre,correo,password,role}=req.body;
    const usuario =new Usuario({nombre,correo,password,role});
    const salt= bcryptjs.genSaltSync();//esto es la cantidad de vueltas en el proceso de encriptación
    usuario.password= bcryptjs.hashSync(password,salt);
    await usuario.save();
    res.status(200).json({
        usuario
    });
}
//Entregar una collection en postMan

module.exports={
    usuariosPost,
    usuariosGet,
    getUsuarioById,
    usuariosPut,
    usuariosDelete
}