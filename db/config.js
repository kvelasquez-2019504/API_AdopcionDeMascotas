const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log("base de datos conectado exitosamente");
    } catch (error) {
        throw new Error("Error al conectar a la DB ", error);
    }
};

module.exports = {
    dbConnection
}