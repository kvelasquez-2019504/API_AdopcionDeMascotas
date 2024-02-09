const {Schema,model}=require("mongoose");
const MascotasSchema = Schema({
    nombre:{
        type:String,
        required:[true,"El nombre de tu mascota es obligatorio"]
    },
    tipo:{
        type:String,
        required:[true, "El tipo de mascota es obligatorio"]
    },
    raza:{
        type:String,
        default:"----"
    },
    edad:{
        type:BigInt,
        required:[true,"La edad de tu mascota es obligatoria"]
    },
    peso:{
        type:Number,
        required:[true,"El peso de tu mascota es obligatorio"]
    },
    altura:{
        type:Number,
        required:[true,"La altura de tu mascota es obligatoria"]
    },
    estado:{
        type:Boolean,
        default:true
    }
});
module.exports=model('Mascota',MascotasSchema);