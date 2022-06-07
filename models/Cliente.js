import mongoose from 'mongoose';

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    email: {
        type: String,
    },
    fechaFinalizacion: {
        type: Date,
        default: Date.now(),
    },
    curso: {
        type: String,
    },
    administrador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Administrador',
    },
}, {
    timestamps: true,
});

const Cliente = mongoose.model('Cliente', clienteSchema)

export default Cliente;