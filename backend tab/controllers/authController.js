import User from '../models/User.js';

export const login = async (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ message: 'Por favor, completa todos los campos' });
    }

    

    try {
        
        const user = await User.findOne({correo});
        

        if (!user || user.password	!== password) {
            
            return res.status(401).json({ message: 'credenciales invalidads' });
        }


        res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }

};