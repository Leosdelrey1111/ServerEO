import { Router } from 'express';
import { deleteDato, getDato, getDatos, postDato, updateDato } from '../controllers/dato';



const routerDato = Router();

routerDato.get('/', getDatos);
routerDato.get('/:id', getDato);
routerDato.delete('/:id', deleteDato);
routerDato.post('/', postDato);
routerDato.put('/:id', updateDato);

export default routerDato;