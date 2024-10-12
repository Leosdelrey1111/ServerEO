import { Router } from 'express';
import { loginFacebook } from '../controllers/facebook'; // Asegúrate de que el path sea correcto

const router = Router();

// Ruta para login con Facebook
router.post('/login/facebook', loginFacebook);

export default router;
