import { Router } from 'express';
import { loginUser } from '../controllers/usuario';
import { loginFacebook } from '../controllers/facebook'; // Asegúrate de que la ruta sea correcta


const routerLogin = Router();
const routerFacebook = Router();
routerFacebook.post('/login/facebook', loginFacebook);

routerLogin.post('/', loginUser);

export default routerLogin;