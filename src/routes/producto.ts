import {Router} from 'express';
import { deleteProduct, getProduct, getProducts, postProduct, updateProduct } from '../controllers/producto';

const routerProducto = Router();

routerProducto.get('/',getProducts );
routerProducto.get('/:id',getProduct);
routerProducto.delete('/:id',deleteProduct);
routerProducto.post('/',postProduct);
routerProducto.put('/:id',updateProduct);

export default routerProducto;
//1.46