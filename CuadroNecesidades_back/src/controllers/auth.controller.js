const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User(
            {
                email,
                password: passwordHash,
                username
            });
        const savedUser = await newUser.save();
        jwt.sign(
            {
                id: savedUser._id
            },
            process.env.JWT_SECRET || 'secretjos',
            {
                expiresIn: 3600
            },
            (err, token) => {
                if (err) console.error(err);
                res.cookie('token', token);

                res.json(
                    {
                        token,
                        id: savedUser._id,
                        email: savedUser.email,
                        username: savedUser.username,
                        createdAt: savedUser.createdAt,
                        updatedAt: savedUser.updatedAt
                    }
                )
            }
        )

       
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User
            .findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Usuario no existe' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Password invalidas' });
        }
        jwt.sign(
            {
                id: user._id
            },
            process
                .env.JWT_SECRET || 'secretjos', {
            expiresIn: 3600
        },
            (err, token) => {
                if (err) throw err;
                res.cookie('token', token);
                res.json(
                    {
                        token,
                        id: user._id,
                        email: user.email,
                        username: user.username,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    }
                )
                
            }
        )   }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al loguear usuario' });
    }
}
const logout = (req, res) => { 
    res.clearCookie('token');
    res.json({ msg: 'Logout exitoso' });
    return res.status(200);
}
const profile = async (req, res) => {
    const user = await User.findById(req.user.id);

    if(!user) return res.status(404).json({msg: 'Usuario no encontrado'});

    return res.json({
        id: user._id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    });
    res.send('Profile'); 
}

module.exports = { register, login, logout, profile };

