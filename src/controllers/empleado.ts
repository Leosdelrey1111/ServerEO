import { Request, Response } from 'express';
import Empleado from '../models/empleado';

export const getEmpleados = async (req: Request, res: Response) => {
    try {
        const listEmpleados = await Empleado.findAll();
        res.json(listEmpleados);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getEmpleado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);

    if(empleado) {
        res.json(empleado)
    } else {
        res.status(404).json({msg: `No existe el empleado con la id: ${id}`})
    }
}


export const deleteEmpleado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);

    if(!empleado) {
        res.status(404).json({msg: `No existe el empleado con la id: ${id}`})
    } else {
        await Empleado.destroy();
        res.json({
            msg: 'El empleado fue eliminado con exito'
        })
    }
}


export const postEmpleado = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Empleado.create(body);

        res.json({
            msg: 'El empleado fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updateEmpleado = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);
    try {
        if(empleado) {
            await empleado.update(body);
            res.json({
                msg: 'El empleado fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe el empleado con la id: ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }

}