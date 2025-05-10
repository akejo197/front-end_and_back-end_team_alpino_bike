import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-screen bg-blue-400 flex flex-col items-center justify-center w-full text-white'>
      
      <img className='w-150 h-auto ml-10' src="src\assets\logo_trasparente.png" alt="" />
      <div className='flex flex-row items-center justify-center'>
      <Link to="/login" className='bg-white text-black 
       font-bold w-40 text-center py-2 px-2 rounded-lg mx-3 hover:bg-yellow-100 '>Iniciar Sesión</Link>
      <Link to="/registro" className='bg-red-600 text-white font-bold w-40 text-center py-2 px-2 rounded-lg mx-3  hover:bg-yellow-100 hover:text-black'>Registrarse</Link>
      </div>
    </div>
  );
};

export default Home;