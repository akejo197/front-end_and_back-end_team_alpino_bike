import React from 'react'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Registro from'./components/Registro.jsx'
import Eventos from './components/Eventos.jsx'
import AdminDashboard from './components/adminDashboard.jsx'
import Perfil from './components/perfil.jsx'
import { Route, BrowserRouter as Router, Routes,} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/perfil" element={<Perfil />} />
      
      {/* Puedes agregar más rutas aquí */}
    </Routes>
      </div>
    </Router>
  )
}

export default App;