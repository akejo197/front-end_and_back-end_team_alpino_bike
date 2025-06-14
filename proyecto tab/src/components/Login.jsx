import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

//en la siguiente linea carga los diferentes parametros y los diferentes estados que se van a se
const login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  // useState se utiliza para crear un estado local llamado user, que inicialmente es null. Este estado se utilizará para almacenar la información del usuario.
  const navigate = useNavigate();

// funcion que se encarga de manejar el inicio de sesion y previene que se ejecute cualquier cosa por defecto
//el parametro e es inicial para poder empezar a trabajar con el evento
const handleLogin = async (e) => {
  // previene que se ejecute cualquier cosa por defecto
  e.preventDefault();
  //el try  bloque se utiliza para manejar errores de manera controlada
  setError(''); // se limpia el mensaje de error antes de hacer la peticion
  try {
    // se hace una peticion post a la api de login con los datos del usuario
    // axios es una libreria que se utiliza para hacer peticiones http
    // se envia el correo y la contraseña del usuario
    // la url de la api es localhost:5002/api/login
    // se espera una respuesta de la api y se guarda en la variable res
    // si la peticion es exitosa, se redirige al usuario a la pagina de eventos
    // si la peticion falla, se captura el error y se muestra un mensaje de error
    // se utiliza el await para esperar la respuesta de la api
    // se utiliza el useNavigate para redirigir al usuario a la pagina de eventos
    // se utiliza el useState para manejar los estados de correo, password y error
    const res  = await axios.post('http://localhost:5002/api/login', {
      correo,
      password
    });
    // si la peticion es exitosa, se redirige al usuario a la pagina de eventos
    // se guarda el usuario en el estado user
    const userData = res.data.user;
    // se guarda el token en el localStorage para poder utilizarlo en otras peticiones
    localStorage.setItem('user', JSON.stringify(userData));
    // se guarda el usuario en el estado user
    // se utiliza el setUser para actualizar el estado user con los datos del usuario
    setUser(userData);
    // se utiliza el useNavigate para redirigir al usuario a la pagina de eventos
   //redirigir segun el rol del usuario
   if(userData.rol === 'admin') {
      navigate('/admin-dashboard');
    } else
    navigate('/eventos');
  // se redirige al usuario a la pagina de eventos
  } catch (error) {
    console.error(error);
    // si la peticion falla, se captura el error y se muestra un mensaje de error
    setError(error.response?.data?.message || 'Error al iniciar sesión');
    }
  }

  


  return (
    <div className="bg-blue-400 flex flex-col items-center justify-center w-full text-white min-h-screen">
      <div className="flex flex-col items-center justify-center border-2 border-white w-110 h-150 rounded-xl">
        <h1 className="text-5xl font-bold my-5">Team alpino bike</h1>
        <h3 className="text-3xl font-bold my-5"> sesion</h3>
        {/*se agrega el error */}
        { error && <p className="text-red-500">{error}</p> }

        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center w-80"
        >
          <div className="flex flex-col items-center justify-center w-full ">
            <input
              placeholder="Correo"
              type="email"
              value={correo}
              // se agrega el evento onChange para poder capturar el valor del input
              onChange={(e) => setCorreo(e.target.value)}
              autoComplete="email"
              className="text-black bg-white w-full py-2 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-3"
            />

            <input
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black bg-white w-full py-2 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-3"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full text-sm px-2 font-bold mt-3">
            <p>olvide mi cotraseña</p>
            <a className="text-red-600" href="#">
              <p>recuperar contraseña</p>
            </a>
          </div>
          <div className="w-full border-1 mt-6"></div>

          <div className="flex flex-row items-center justify-between w-full mt-5">
            <button type="submit" className="bg-red-600 text-white font-bold w-full text-center py-2 px-2 rounded-lg   hover:bg-yellow-100 hover:text-black  mt-2">
              Iniciar sesión
            </button>
          </div>

          <div className="flex flex-row items-center justify-between w-full mt-5">
            <button className="bg-white text-black font-bold w-38 py-2 rounded-lg ">
              Google
            </button>
            <button className="bg-blue-700 text-white font-bold w-38 py-2 rounded-lg ">
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}
export default login;