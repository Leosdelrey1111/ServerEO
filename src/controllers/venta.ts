
import { Request, Response } from 'express';
import Venta from '../models/venta';

export const getVentas= async (req: Request, res: Response) => {
    try {
        const listVentas = await Venta.findAll();
        res.json(listVentas);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = await Venta.findByPk(id);

    if(venta) {
        res.json(venta)
    } else {
        res.status(404).json({msg: `No existe la venta con la id: ${id}`})
    }
}


export const deleteVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = await Venta.findByPk(id);

    if(!venta) {
        res.status(404).json({msg: `No existe la  venta con la id: ${id}`})
    } else {
        await venta.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        })
    }
}


export const postVenta = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Venta.create(body);

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

export const updateVenta = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const venta = await Venta.findByPk(id);
    try {
        if(venta) {
            await venta.update(body);
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