const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const {existeMascotaById} = require('../helpers/db-validator');
const {getMascotaById,
    mascotasGet,
    mascotasPost, 
    mascotasPut} = require('../controllers/mascota.controller');
const { model } = require('mongoose');
const router = Router();
router.get("/", mascotasGet);
router.post(
    "/", [
    check("nombre", "El nombre de la mascota es obligatorio").not().isEmpty(),
    check("tipo", "El tipo de mascota es obligatorio").not().isEmpty(),
    check("edad", "La edad es obligatoria").not().isEmpty(),
    check("peso", "El peso es obligatorio").not().isEmpty(),
    check("altura", "La altura es obligatoria").not().isEmpty(),
    validarCampos
], mascotasPost);

router.get(
    "/:id",[
        check("id","El id no es un formato válido").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ],getMascotaById
);

router.put(
    "/:id",[
        check("id","El id no es un formato válido").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ],mascotasPut
);
module.exports = router;