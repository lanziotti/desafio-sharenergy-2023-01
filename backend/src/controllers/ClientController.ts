import { Request, Response } from "express";
import Client from '../database/ClientModel';

export class ClientController {

    async create(req: Request, res: Response) {
        await Client.create(req.body)
            .then(data => {
                return res.status(201).json(data);
            })
            .catch(error => {
                if (error.code === 11000) {
                    return res.status(400).json({ mensagem: "Já existe cliente cadastrado com esse CPF." });
                }
                if (error.errors.nome) {
                    return res.status(400).json({ mensagem: "Nome obrigatório." });
                }
                if (error.errors.email) {
                    return res.status(400).json({ mensagem: "E-mail obrigatório." });
                }
                if (error.errors.telefone) {
                    return res.status(400).json({ mensagem: "Telefone obrigatório." });
                }
                if (error.errors.endereco) {
                    return res.status(400).json({ mensagem: "Endereço obrigatório." });
                }
                if (error.errors.cpf) {
                    return res.status(400).json({ mensagem: "CPF obrigatório." });
                }
            })

        return res.status(500);
    }


    async findById(req: Request, res: Response) {
        const { id } = req.params;

        await Client.findById(id)
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(error => {
                return res.status(400).json({ mensagem: "Cliente não encontrado." });
            })

    }
}