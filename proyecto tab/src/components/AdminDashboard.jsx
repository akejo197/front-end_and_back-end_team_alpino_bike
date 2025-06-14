import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const adminDashboard = () => {


const navigate = useNavigate();
//   navegate se utiliza para redirigir al usuario a otra ruta, en este caso, a la página de inicio ("/") después de que se haya cargado el componente.
const [user, setUser] = useState(null);
// useState se utiliza para crear un estado local llamado user, que inicialmente es null. Este estado se utilizará para almacenar la información del usuario.



useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if(!storedUser || storedUser.rol !== 'admin') {
    navigate('/login');
  } else {
    setUser(storedUser);
  }
}, [navigate]);



  return (
    <div className='min-h-screen bg-blue-400 flex flex-col items-center justify-center w-full '>
      <div className="flex flex-row items-center justify-center w-full mt-5 fixed top-0 right-0 left-0 p-5  ">
        <Link to="/eventos" className=' text-red-600 font-bold w-48 text-center py-2 px-2 rounded-lg   hover:bg-red-500 hover:text-white  mt-2 '>Eventos</Link>
                    <Link to="/admi-perfil" className=' text-red-600 font-bold w-48 text-center py-2 px-2 rounded-lg   hover:bg-red-500 hover:text-white  mt-2 '>Perfil</Link>
      </div>

      <div className='flex flex-col items-center justify-center text-white text-3xl  w-full h-10 mt-30'>
        <h1>Bienvenido, <strong className='text-red-600'>Administrador</strong></h1>
      </div>

{/* primer contenedor de eventos */}
        
      <div className='flex flex-row items-center justify-center w-full  mt-10'>

        {/* primera targeta de eventos colchonsitos */}
        <div className='flex flex-col items-center justify-center bg-blue-350 border-2 text-white w-50 h-80 rounded-lg p-5  mx-10'>
          <h1 className='text-red-600 text-bold flex top-0 py-2'>colchonsitos</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia, molestias ipsam quia in, nisi quam iure repudiandae </p>
          <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              Editar 
            </button>
            <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              eliminar 
            </button>
        </div>

        {/* segunda targeta de eventos san miguel */}
        <div className='flex flex-col items-center justify-center bg-blue-350 border-2 text-white w-50 h-80 rounded-lg p-5 mx-10'>
          <h1 className='text-red-600 text-bold flex top-0 py-2'>San miguel</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia, molestias ipsam quia in, nisi quam iure repudiandae </p>
          <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              Editar 
            </button>
            <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              eliminar 
            </button>
        </div>


        {/* tercera targeta de eventos san rafael */}
        <div className='flex flex-col items-center justify-center bg-blue-350 border-2 text-white w-50 h-80 rounded-lg p-5 mx-10'>
          <h1 className='text-red-600 text-bold flex top-0 py-2'>san rafael</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia, molestias ipsam quia in, nisi quam iure repudiandae </p>
          <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              Editar 
            </button>
            <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              eliminar 
            </button>
        </div>



         {/* cuarta targeta de eventos san rafael */}
        <div className='flex flex-col items-center justify-center bg-blue-350 border-2 text-white w-50 h-80 rounded-lg p-5 mx-10'>
          <h1 className='text-red-600 text-bold flex top-0 py-2'>Curubital</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia, molestias ipsam quia in, nisi quam iure repudiandae </p>
          <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              Editar 
            </button>
            <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              eliminar 
            </button>
        </div>



        

      </div>

{/* segundo contenedor de eventos */
  <div className='flex flex-row items-center justify-center w-full '>

        {/* primera targeta de eventos colchonsitos */}
        <div className='flex flex-col items-center justify-center bg-blue-350 border-2 text-white w-50 h-80 rounded-lg p-5 m-10'>
          <h1 className='text-red-600 text-bold flex top-0 py-2'>colchonsitos</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia, molestias ipsam quia in, nisi quam iure repudiandae </p>
          <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              Editar 
            </button>
            <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              eliminar 
            </button>
        </div>

        {/* segunda targeta de eventos san miguel */}
        <div className='flex flex-col items-center justify-center bg-blue-350 border-2 text-white w-50 h-80 rounded-lg p-5 m-10'>
          <h1 className='text-red-600 text-bold flex top-0 py-2'>San miguel</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia, molestias ipsam quia in, nisi quam iure repudiandae </p>
          <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              Editar 
            </button>
            <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              eliminar 
            </button>
        </div>


        {/* tercera targeta de eventos san rafael */}
        <div className='flex flex-col items-center justify-center bg-blue-350 border-2 text-white w-50 h-80 rounded-lg p-5 m-10'>
          <h1 className='text-red-600 text-bold flex top-0 py-2'>San miguel</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia, molestias ipsam quia in, nisi quam iure repudiandae </p>
          <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              Editar 
            </button>
            <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              eliminar 
            </button>
        </div>

        {/* cuarta targeta de eventos san rafael */}
        <div className='flex flex-col items-center justify-center bg-blue-350 border-2 text-white w-50 h-80 rounded-lg p-5 mx-10'>
          <h1 className='text-red-600 text-bold flex top-0 py-2'>Curubital</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia, molestias ipsam quia in, nisi quam iure repudiandae </p>
          <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              Editar 
            </button>
            <button type="submit" className=" text-white font-bold w-full text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-1 mx-2">
              eliminar 
            </button>
        </div>

      </div>}

      
            
    </div>
  )
}

export default adminDashboard