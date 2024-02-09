const {Schema, model}=require('mongoose');
const  UsuarioSchema =Schema({
    nombre:{
        type: String,
        required:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true, 'El correo es obligatorio']
    },
    password:{
        type:String,
        required:[true,'La clave es obligatoria']
    },
    img:{
        type:String
    },
    role:{
        type:String,
        required: true,
        enum:["ADMIN_ROLE","USER_ROLE"]
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:true
    }
});
/*
UsuarioSchema.methods.toJSON=function (){
    const{__v,password, ...usuario}=this.Object();
    return usuario;
};*/
//Usuario, es el nombre que se le está dando
module.exports =model('Usuario',UsuarioSchema);