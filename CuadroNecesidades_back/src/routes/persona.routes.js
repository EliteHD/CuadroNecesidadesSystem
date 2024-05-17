const { Router } = require('express');
const router = Router();
const authRequired = require('../middleware/validateToken');

const {
    getPersonas,
    getPersona,
    createPersona,
    deletePersona,
    updatePersona
} = require('../controllers/persona.controller');
const validatorSchema = require('../middleware/validator.middleware');
const personaSchema  = require('../schemas/persona.schema');

router.get('/personas', authRequired, getPersonas);

router.get('/personas/:id', authRequired, getPersona);

router.post('/personas', authRequired, validatorSchema(personaSchema), createPersona);

router.delete('/personas/:id', authRequired, deletePersona);

router.put('/personas/:id', authRequired, updatePersona);

module.exports = router;
