import { Request, Response } from 'express';
import Cliente from '../models/cliente';

export const postCliente = async (req: Request, res: Response) => {
    const { body } = req;
    const { Email_Client } = req.body;

    const email = await Cliente.findOne({where: {Email_Client: Email_Client}})
    if (email) {
        return res.status(400).json ({
            msg: 'El email ya esta registrado en la base de datos'
        });
    }

    try {
        await Cliente.create(body);

        res.json({
            msg: 'El cliente fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}