const {response}= require('express');
const Mascota = require('../models/mascota');

const mascotasGet=async (req,res=response)=>{
    const {limite, desde} = req.query;
    const query={estado:true}
    const [total,mascotas]=await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
    res.status(200).json({
        total, mascotas
    });
}

const getMascotaById=async (req,res)=>{
    const {id}=req.params;
    const mascota = await Mascota.findOne({_id:id});
    res.status(200).json({
        mascota
    });
}

const mascotasPut=async (req,res)=>{
    const {id}=req.params;
    const {_id,tipo,raza,...resto} =req.body;
    await Mascota.findByIdAndUpdate(id,resto);
    const mascota = await Mascota.findOne({_id:id});
    res.status(200).json({
        msg:"Se actualizó los datos de la mascota",
        mascota
    });
}

const mascotasPost =async (req,res)=>{
    const {nombre,tipo,raza,edad,peso,altura}=req.body;
    const mascota = new Mascota({nombre,tipo,raza,edad,peso,altura});
    await mascota.save();
    res.status(200).json({
        mascota
    });
}

module.exports = {
    mascotasPut,
    getMascotaById,
    mascotasGet,
    mascotasPost
}