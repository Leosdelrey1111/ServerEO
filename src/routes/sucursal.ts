import { Router } from 'express';
import { deleteSucursal, getSucursal, getSucursales, postSucursal, updateSucursal } from '../controllers/sucursal';

const routerSucursal = Router();

routerSucursal.get('/', getSucursales);
routerSucursal.get('/:id', getSucursal);
routerSucursal.delete('/:id', deleteSucursal);
routerSucursal.post('/', postSucursal);
routerSucursal.put('/:id', updateSucursal);

export default routerSucursal;