import mongoose, { Schema } from "mongoose";

const ClientModel = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    cpf: { type: String, required: true, unique: true }
},
    {
        timestamps: true
    });

export default mongoose.model('Client', ClientModel);