
import { Request, Response } from 'express';
import tip_prods from '../models/tip_prods';

export const getTip_prodss = async (req: Request, res: Response) => {
    try {
        const listTip_prods = await tip_prods.findAll();
        res.json(listTip_prods);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getTip_prods = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tipprods = await tip_prods.findByPk(id);

    if(tipprods) {
        res.json(tipprods)
    } else {
        res.status(404).json({msg: `No existe la venta con la id: ${id}`})
    }
}


export const deleteTipProds = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tipprods = await tip_prods.findByPk(id);

    if(!tipprods) {
        res.status(404).json({msg: `No existe la  venta con la id: ${id}`})
    } else {
        await tipprods.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        })
    }
}


export const postTipProds = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await tip_prods.create(body);

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

export const updateTipProds = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const tipoprods = await tip_prods.findByPk(id);
    try {
        if(tipoprods) {
            await tipoprods.update(body);
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