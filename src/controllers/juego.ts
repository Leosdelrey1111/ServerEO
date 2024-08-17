import { Request, Response } from 'express';
import Juego from '../models/juego'

export const getJuegos = async (req: Request, res: Response) => {
    try {
        const listJuegos = await Juego.findAll();
        res.json(listJuegos);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getJuego = async (req: Request, res: Response) => {
    const { id } = req.params;
    const juego = await Juego.findByPk(id);

    if(juego) {
        res.json(juego)
    } else {
        res.status(404).json({msg: `No existe la sucursal con la id: ${id}`})
    }
}


export const deleteJuego = async (req: Request, res: Response) => {
    const { id } = req.params;
    const juego = await Juego.findByPk(id);

    if(!juego) {
        res.status(404).json({msg: `No existe la sucursal con la id: ${id}`})
    } else {
        await juego.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        })
    }
}


export const postJuego = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Juego.create(body);

        res.json({
            msg: 'El juego fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updateJuego = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const juego = await Juego.findByPk(id);
    try {
        if(juego) {
            await juego.update(body);
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