import { Router } from 'express';
import { deleteVenta, getVenta, getVentas, postVenta, updateVenta } from '../controllers/venta';

const routerVenta = Router();

routerVenta.get('/', getVentas);
routerVenta.get('/:id', getVenta);
routerVenta.delete('/:id', deleteVenta);
routerVenta.post('/', postVenta);
routerVenta.put('/:id', updateVenta);

export default routerVenta;