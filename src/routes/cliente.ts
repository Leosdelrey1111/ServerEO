import { Router } from 'express';
import { postCliente } from '../controllers/cliente';



const routerCliente = Router();

routerCliente.post('/', postCliente);

export default routerCliente;