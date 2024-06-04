const { Router } = require('express');
const { login, register, logout, profile, registerFirebase, loginFirebase } = require('../controllers/auth.controller');
const router = Router();
const authRequired = require('../middleware/validateToken');
const validatorSchema = require('../middleware/validator.middleware');
const { loginSchema, registerSchema } = require('../schemas/auth.schema');


router.post('/register', register);

router.post('/login',  login);

router.post('/logout', logout);

router.get('/profile', profile);

router.post('/registerFirebase', registerFirebase);

router.post('/loginFirebase', loginFirebase);

module.exports = router;





