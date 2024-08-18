import { Router } from 'express';
import { deletedistribuidor, getdistribuidor, getdistribuidors, postdistribuidor, updatedistribuidor } from '../controllers/distribuidors';


const routerdistribuidors = Router();

routerdistribuidors.get('/', getdistribuidors);
routerdistribuidors.get('/:id', getdistribuidor);
routerdistribuidors.delete('/:id', deletedistribuidor);
routerdistribuidors.post('/', postdistribuidor);
routerdistribuidors.put('/:id', updatedistribuidor);

export default routerdistribuidors;