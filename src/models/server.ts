import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routeSucursal from '../routes/sucursal';
import db from '../db/connection';
import routerProducto from '../routes/producto';
import routerVenta from '../routes/venta';
import routerJuego from '../routes/juego';
import routerEmpleado from '../routes/empleado';
import routerRol from '../routes/rol';
import routerDato from '../routes/dato';
import routertip_prods from '../routes/tip_prods';
import routerdistribuidors from '../routes/distribuidors';
import routernotas from '../routes/notas';
import routerLogin from '../routes/usuario';

class Server {
    private app: Application;
    private port: string;

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen () {
        this.app.listen(this.port, ()  => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request , res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/sucursales', routeSucursal)
        this.app.use('/api/productos',routerProducto)
        this.app.use('/api/ventas',routerVenta)
        this.app.use('/api/juegos',routerJuego)
        this.app.use('/api/empleados',routerEmpleado)
        this.app.use('/api/roles',routerRol)
        this.app.use('/api/datos',routerDato)
        this.app.use('/api/tip_Prod',routertip_prods)
        this.app.use('/api/distribuidors',routerdistribuidors)
        this.app.use('/api/Notas',routernotas)
        this.app.use('/api/login',routerLogin)
    }

    midlewares() {
        //Parseamos el body
        this.app.use(express.json());
        //Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error);
            console.log('Error al conectase a la base de datos');
        }
    }
    
}

export default Server;