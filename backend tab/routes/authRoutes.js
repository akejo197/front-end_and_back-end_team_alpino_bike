import express from 'express'; // Importa el módulo express para crear un enrutador y manejar las solicitudes HTTP
import { login } from '../controllers/authController.js'; // Importa las funciones de controlador para manejar el registro y el inicio de sesión de usuarios

const router = express.Router(); // Crea una instancia de un enrutador de Express para definir rutas relacionadas con la autenticación de usuarios

router.post('/login', login); // Define la ruta para el inicio de sesión de usuarios y asocia la función login del controlador

export default router; // Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación (en este caso, se exporta el enrutador para que pueda ser utilizado en el archivo principal de la aplicación o en otros módulos relacionados con la autenticación)

