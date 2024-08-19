import { Router } from 'express';
import { deleteEmpleado, getEmpleado, getEmpleados, postEmpleado, updateEmpleado, updateEstadoEmpleado } from '../controllers/empleado';


const routerEmpleado = Router();

routerEmpleado.get('/', getEmpleados);
routerEmpleado.get('/:id', getEmpleado);
routerEmpleado.delete('/:id', deleteEmpleado);
routerEmpleado.post('/', postEmpleado);
routerEmpleado.put('/:id', updateEmpleado);
routerEmpleado.put('/:id/estado', updateEstadoEmpleado);

export default routerEmpleado;