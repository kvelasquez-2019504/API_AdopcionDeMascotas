const {response}= require('express');
const Mascota = require('../models/mascota');

const mascotasGet=async (req,res=response)=>{
    const {limites, desde} = req.query;
    const query={estado:true}
}