import { Router } from 'express';
import { deleteEmpleado, getEmpleado, getEmpleados, postEmpleado, updateEmpleado } from '../controllers/empleado';


const routerEmpleado = Router();

routerEmpleado.get('/', getEmpleados);
routerEmpleado.get('/:id', getEmpleado);
routerEmpleado.delete('/:id', deleteEmpleado);
routerEmpleado.post('/', postEmpleado);
routerEmpleado.put('/:id', updateEmpleado);

export default routerEmpleado;