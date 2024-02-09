const {Schema,module}=require("mongoose");
const MascotaSchema = Schema[{
    nombre:{
        type:String,
        required:[true,"El nombre de tu mascota es obligatorio"]
    },
    tipo:{
        type:String,
        required:[true, "El tipo de mascota es obligatorio"]
    },
    raza:{
        type:String
    },
    edad:{
        type:Integer,
        required:[true,"La edad de tu mascota es obligatoria"]
    },
    peso:{
        type:Double,
        required:[true,"El peso de tu mascota es obligatorio"]
    },
    altura:{
        type:Double,
        required:[true,"La altura de tu mascota es obligatoria"]
    },
    estado:{
        type:Boolean,
        default:true
    }
}];
module.exports=model('Mascota',MascotaSchema);