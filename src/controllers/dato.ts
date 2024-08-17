import { Request, Response } from 'express';
import Dato from '../models/dato';



export const getDatos = async (req: Request, res: Response) => {
    try {
        const listDatos = await Dato.findAll();
        res.json(listDatos);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getDato = async (req: Request, res: Response) => {
    const { id } = req.params;
    const dato = await Dato.findByPk(id);

    if(dato) {
        res.json(dato)
    } else {
        res.status(404).json({msg: `No existen con los datos`})
    }
}


export const deleteDato = async (req: Request, res: Response) => {
    const { id } = req.params;
    const dato = await Dato.findByPk(id);

    if(!dato) {
        res.status(404).json({msg: `No existe los datos`})
    } else {
        await dato.destroy();
        res.json({
            msg: 'Los datos han sido eliminados'
        })
    }
}


export const postDato = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Dato.create(body);

        res.json({
            msg: 'El dato fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updateDato = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const dato = await Dato.findByPk(id);
    try {
        if(dato) {
            await dato.update(body);
            res.json({
                msg: 'Los datos fueron actualizados con exito'
            })
        } else {
            res.status(404).json({
                msg: `El dato no existe`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }

}