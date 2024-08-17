import { Router } from 'express';
import { deleteRol, getRol, getRoles, postRol, updateRol } from '../controllers/rol';


const routerRol = Router();

routerRol.get('/', getRoles);
routerRol.get('/:id', getRol);
routerRol.delete('/:id', deleteRol);
routerRol.post('/', postRol);
routerRol.put('/:id', updateRol);

export default routerRol;