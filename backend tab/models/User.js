// este modelo de usuario se va encargar de trabajar con la base de datos y su conectividad en la nube o de forma local segun sea el caso
import mongoose from 'mongoose';


//userSchema define el esquema (estructura) para los documentos que se almacenarán en una colección de usuarios dentro de una base de datos MongoDB utilizando el framework Mongoose de Node.js
const userSchema = new mongoose.Schema({
    // Definición de los campos del esquema (userSchema) para la colección de usuarios en formato JSON
  nombre: {
    type: String,      
    required: true,
  },
    correo: {
    type: String,
    required: true,
  },
    password: { 
    type: String
    },
},
    {
         timestamps: true 
    } // Agrega campos de fecha de creación y actualización automáticamente (se utiliza para guardar la fecha y hora de creación y actualización del registro)

)

const User = mongoose.model('User', userSchema) // Crea un modelo de Mongoose llamado 'User' basado en el esquema definido anteriormente (userSchema). Este modelo se utilizará para interactuar con la colección de usuarios en la base de datos MongoDB.
export default User // Exporta el modelo User para que pueda ser utilizado en otras partes de la aplicación (en este caso, se exporta el modelo User para que pueda ser utilizado en otros archivos de la aplicación, como controladores o rutas)