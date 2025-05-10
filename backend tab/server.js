import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'; // importacion de rutas de autenticacion

// importacionde rutas

dotenv.config();//coneccion de archivo de variables de entorno
connectDB();//conexion a la base de datos

const app = express();//instancia de express
app.use(cors());//uso de cors
app.use(express.json());//especificar el tipo de contenido que se va a recibir en el servidor tipo json

app.use('/api', authRoutes);//configurracion de rutas de la api

const PORT = process.env.PORT || 5000;//puerto de la aplicacion
app.listen(PORT, () => { //inicializacion del servidor en un puerto especifico
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);//mensaje de inicio del servidor
})