import React from 'react'
import { Link } from 'react-router-dom'

const perfil = () => {
  return (
    <div className='min-h-screen bg-blue-400 flex flex-col items-center justify-center w-full '>
      <div className="flex flex-row items-center justify-center w-full mt-5 fixed top-0 right-0 left-0 p-5">
       <Link to="/eventos" className=' text-red-600 font-bold w-48 text-center py-2 px-2 rounded-lg   hover:bg-red-500 hover:text-white  mt-2 '>Eventos</Link>
            <Link to="/perfil" className=' text-red-600 font-bold w-48 text-center py-2 px-2 rounded-lg   hover:bg-red-500 hover:text-white  mt-2 '>Perfil</Link>
            </div>
            <div>
                <div className="flex flex-beetwen items-center justify-center border-2 border-white w-220 h-150 rounded-xl ">
                    <div className='flex flex-col items-center justify-center w-full '>
                        <img className='w-80 h-auto ml-10 rounded-full ' src="src\assets\image.png" alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center w-full '>
                        <h1 className='text-white font-bold text-3xl my-5'>Usuario</h1>
                        <button type="submit" className=" text-red-600 font-bold w-48 text-center py-2 px-2 rounded-lg   hover:bg-red-500 hover:text-white  mt-2 mb-5">
              Datos Personales
            </button>
            <button type="submit" className=" text-red-600 font-bold w-48 text-center py-2 px-2 rounded-lg   hover:bg-red-500 hover:text-white  mt-2 mb-5">
              Datos Medicos
            </button>
            <button type="submit" className=" text-red-600 font-bold w-48 text-center py-2 px-2 rounded-lg   hover:bg-red-500 hover:text-white  mt-2 mb-5">
              Eventos registrados
            </button>
            <button type="submit" className=" text-white font-bold w-48 text-center py-2 px-2 rounded-lg bg-red-600  hover:bg-white hover:text-red-600  mt-2">
              Cerrar sesion 
            </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default perfil