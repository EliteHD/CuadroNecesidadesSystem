const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
    nombre_articulo: {
        type: String,
        required: true
    },
    descripcion_articulo: {
        type: String,
        required: true
    },
    precioUnitario: {
        type: Number,
        default: 0
    },
    unidadMedida: {
        type: Number,
        default: 0
    },
    id_partidas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partida',  
        required: true
    },
    id_institucion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institucion',  
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Articulo', articuloSchema);

