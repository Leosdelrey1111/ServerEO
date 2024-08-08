import { Request, Response } from 'express';
import Sucursal from '../models/sucursal'

export const getSucursales = async (req: Request, res: Response) => {
    try {
        const listSucursales = await Sucursal.findAll();
        res.json(listSucursales);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getSucursal = async (req: Request, res: Response) => {
    const { id } = req.params;
    const sucursal = await Sucursal.findByPk(id);

    if(sucursal) {
        res.json(sucursal)
    } else {
        res.status(404).json({msg: `No existe la sucursal con la id: ${id}`})
    }
}


export const deleteSucursal = async (req: Request, res: Response) => {
    const { id } = req.params;
    const sucursal = await Sucursal.findByPk(id);

    if(!sucursal) {
        res.status(404).json({msg: `No existe la sucursal con la id: ${id}`})
    } else {
        await sucursal.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        })
    }
}


export const postSucursal = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Sucursal.create(body);

        res.json({
            msg: 'El producto fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updateSucursal = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const sucursal = await Sucursal.findByPk(id);
    try {
        if(sucursal) {
            await sucursal.update(body);
            res.json({
                msg: 'El producto fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe la sucursal con la id: ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }

}