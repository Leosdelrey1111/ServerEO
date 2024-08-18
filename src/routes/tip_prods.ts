import { Router } from 'express';
import { deleteTipProds, getTip_prods, getTip_prodss, postTipProds, updateTipProds } from '../controllers/tip_prods';


const routertip_prods = Router();

routertip_prods.get('/', getTip_prodss);
routertip_prods.get('/:id', getTip_prods);
routertip_prods.delete('/:id', deleteTipProds);
routertip_prods.post('/', postTipProds);
routertip_prods.put('/:id', updateTipProds);

export default routertip_prods;