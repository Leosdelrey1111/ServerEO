
import { Request, Response } from 'express';

import distribuidors from '../models/distribuidors';

export const getdistribuidors = async (req: Request, res: Response) => {
    try {
        const listdistribuidors = await distribuidors.findAll();
        res.json(listdistribuidors);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getdistribuidor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const distribuidor = await distribuidors.findByPk(id);

    if(distribuidor) {
        res.json(distribuidor)
    } else {
        res.status(404).json({msg: `No existe la venta con la id: ${id}`})
    }
}


export const deletedistribuidor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const distribuidor = await distribuidors.findByPk(id);

    if(!distribuidor) {
        res.status(404).json({msg: `No existe la  venta con la id: ${id}`})
    } else {
        await distribuidor.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        })
    }
}


export const postdistribuidor = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await distribuidors.create(body);

        res.json({
            msg: 'La venta fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updatedistribuidor = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const distribuidor = await distribuidors.findByPk(id);
    try {
        if(distribuidor) {
            await distribuidor.update(body);
            res.json({
                msg: 'La venta fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe la venta con la id: ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }

}