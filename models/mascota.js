const {Schema,module}=require("mongoose");
const MascotaSchema = Schema[{
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    raza:{
        type:String,
        required:[true,"La raza es obligatoria"]
    },
    edad:{
        type:Integer,
        required:[true,"La edad es obligatoria"]
    },
    estado:{
        type:Boolean,
        default:true
    }
}];
module.exports=model('Mascota',MascotaSchema);