import { Router } from 'express';
import { deleteJuego, getJuego, getJuegos, postJuego, updateJuego } from '../controllers/juego';

const routerJuego = Router();

routerJuego.get('/', getJuegos);
routerJuego.get('/:id', getJuego);
routerJuego.delete('/:id', deleteJuego);
routerJuego.post('/', postJuego);
routerJuego.put('/:id', updateJuego);

export default routerJuego;