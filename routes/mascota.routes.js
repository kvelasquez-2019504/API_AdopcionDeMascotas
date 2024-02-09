const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos}=require('../middlewares/validar-campos');
const {mascotasGet, mascotasPost} = require('../controllers/mascota.controller');
const { model } = require('mongoose');
const router = Router();
router.get("/",mascotasGet);
router.post(
    "/",[
        check("nombre","El nombre de la mascota es obligatorio").not().isEmpty(),
        check("tipo","El tipo de mascota es obligatorio"),
        check("edad","La edad es un número entero").isNumeric(),
        check("peso","El peso tiene que ser número").isNumeric(),
        check("altura","La altura tiene que ser un número").isNumeric()
    ],mascotasPost);
module.exports=router;