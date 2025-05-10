import React from 'react'
import { Link } from 'react-router-dom';

const Registro = () => {
  return (
    <div className='min-h-screen bg-blue-400 flex flex-col items-center justify-center w-full text-white p-15'>
      <div className='flex flex-row items-center justify-between border-2 border-white w-full h-230 rounded-xl '>
        <div className=' flex flex-col items-center justify-center w-full  pl-20 pr-10 py-0'>
          <div className='flex flex-col items-center justify-center w-full h-50'>
            <h1 className='text-5xl font-bold capitalize py-4'>datos personales</h1>
            <h3 className='text-3xl font-bold capitalize py-4'>por favor ingrese sus datos personales</h3>
          </div>
          <form className='flex flex-col items-center justify-center w-full'>
            <div className='flex flex-col items-center justify-center w-full'>
            <input type="text" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Usuario' required/>

            <input type="text" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Nombres' required/>

            <input type="text" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Apellidos' required/>

            <div className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4'>
            <select className='w-full'  name="tipoCedula" id="tipo_cedula" class="input tipo_cedula" required>
                <option value="CC">Cedula de ciudadania</option>
                <option value="TI">Targeta de Identidad</option>
                <option value="PA">Pasaporte</option>
                <option value="Otro">Otro</option>
            </select>
            </div>

            <input type="text" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Cedula' required/>
            
            <input type="tel" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Telefono'  required/>

            <input type="email" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Correo' required/>

            <input type="password" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Contraseña' required/>






            </div>
          </form>
        </div>
        <div className=' flex flex-col items-center justify-center w-full  pl-10 pr-20 py-0'>
        <div className='flex flex-col items-center justify-center w-full h-50'>
            <h1 className='text-5xl font-bold capitalize py-4'>datos medico</h1>
            <h3 className='text-3xl font-bold capitalize py-4'>por favor ingrese sus datos medicos</h3>
          </div>
          <form className='flex flex-col items-center justify-center w-full'>
            <div className='flex flex-col items-center justify-center w-full'>
            <input type="text" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Nombre contacto' required/>

            <input type="tel" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Telefono contacto' required/>

            <input type="text" className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='EPS' required/>

            <div className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4'>
            <select className='w-full'  name="tipoCedula" id="tipo_cedula" class="input tipo_cedula" required>
                <option value="CC">Regimen</option>
                <option value="TI">contributivod</option>
                <option value="PA">Subsidiado</option>
            </select>
            </div>

            <input className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Alergias' type="text" />
            <input className='text-black bg-white w-full py-3 px-2 rounded-md  hover:border-2 placeholder-gray-600  my-4' placeholder='Enfermedades' type="text" />

           

         

            <Link to="/eventos"  className='bg-red-600 text-white font-bold w-full text-center py-3 px-2 rounded-lg mt-2 mb-30  hover:bg-yellow-100 hover:text-black'>Registrarse</Link>
            



            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registro