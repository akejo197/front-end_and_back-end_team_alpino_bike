// exportar la funcion connectDB para poder usarla en otros archivos
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI); // Opciones eliminadas
        console.log("👍 Conexión a MongoDB exitosa 👍");
        console.log("Estado de la conexión:", mongoose.connection.readyState);
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB ❌", error);
        process.exit(1);
    }
};

export default connectDB;
