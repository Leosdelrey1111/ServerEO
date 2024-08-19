import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

const validarToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']

    if(token != undefined && token.startsWith('Bearer' )) {
        //Tiene token
        try {
            const bearerToken = token.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'reprobadosporbaratos');
            next()
        } catch (error) {
            res.status(401).json({
                msg: 'token no valido'
            })
        }
        
    }else {
        res.status(401).json({
            msg: 'Acceso denegado'
        })
    }
}

export default validarToken