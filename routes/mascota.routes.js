const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos}=require('../middlewares/validar-campos');
const {mascotasGet} = require('../controllers/mascota.controller');
const { model } = require('mongoose');
const router = Router();
router.get("/",mascotasGet);

module.exports=router;