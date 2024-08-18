import { Request, Response } from 'express';

import Notas from '../models/notas'
export const getnotas = async (req: Request, res: Response) => {
    try {
        const listnotas = await Notas.findAll();
        res.json(listnotas);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getNota = async (req: Request, res: Response) => {
    const { id } = req.params;
    const nota = await Notas.findByPk(id);

    if(nota) {
        res.json(nota)
    } else {
        res.status(404).json({msg: `No existe la sucursal con la id: ${id}`})
    }
}


export const deleteNota = async (req: Request, res: Response) => {
    const { id } = req.params;
    const nota = await Notas.findByPk(id);

    if(!nota) {
        res.status(404).json({msg: `No existe la sucursal con la id: ${id}`})
    } else {
        await nota.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        })
    }
}


export const postNota = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Notas.create(body);

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

export const updateNota = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const nota = await Notas.findByPk(id);
    try {
        if(nota) {
            await nota.update(body);
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