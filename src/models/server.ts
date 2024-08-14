import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routeSucursal from '../routes/sucursal';
import db from '../db/connection';
import router from '../routes/producto';
import routerProducto from '../routes/producto';

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