import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='bg-blue-400 flex flex-col items-center justify-center w-full text-white min-h-screen'>
      <div className='flex flex-col items-center justify-center border-2 border-white w-110 h-150 rounded-xl'>
      <h1 className='text-5xl font-bold my-5'>Team alpino bike</h1>
      <h3 className='text-3xl font-bold my-5'>iniciar sesion</h3>

        <form className='flex flex-col items-center justify-center w-80' >
          <div className='flex flex-col items-center justify-center w-full '> 
            <input type="text" className='text-black bg-white w-full py-2 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-3' placeholder='Usuario'/>

            <input type="text" className='text-black bg-white w-full py-2 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-3' placeholder='Contraseña'/>
          </div>
          <div className='flex flex-row items-center justify-between w-full text-sm px-2 font-bold mt-3'>
            <p>olvide mi cotraseña</p>
            <a className='text-red-600' href="#"><p >recuperar contraseña</p></a>
          </div>
          <div className='w-full border-1 mt-6'></div>
          
          <div className='flex flex-row items-center justify-between w-full mt-5'>
          
          <Link to="/eventos" className='bg-red-600 text-white font-bold w-full text-center py-2 px-2 rounded-lg   hover:bg-yellow-100 hover:text-black  mt-2'>Iniciar Sesion</Link>
          </div>

          
          <div className='flex flex-row items-center justify-between w-full mt-5'>
            <button className='bg-white text-black font-bold w-38 py-2 rounded-lg '>Google</button>
            <button className='bg-blue-700 text-white font-bold w-38 py-2 rounded-lg '>Facebook</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login