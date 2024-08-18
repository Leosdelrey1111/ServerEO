import { Router } from 'express';

import { deleteNota, getNota, getnotas, postNota, updateNota } from '../controllers/notas';

const routernotas = Router();

routernotas.get('/', getnotas);
routernotas.get('/:id', getNota);
routernotas.delete('/:id', deleteNota);
routernotas.post('/', postNota);
routernotas.put('/:id', updateNota);

export default routernotas;