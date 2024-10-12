import { Request, Response } from 'express';
import Usuario from '../models/usuario'; // Ajustamos el path del modelo
import jwt from 'jsonwebtoken';
import axios from 'axios';

// Función de login con Facebook
export const loginFacebook = async (req: Request, res: Response) => {
  const { accessToken } = req.body;

  try {
    // Verificamos el token de acceso con Facebook
    const response = await axios.get(`https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,email`);
    const { email, id, name } = response.data;

    // Buscamos al usuario en la base de datos
    let usuario = await Usuario.findOne({ where: { Emp_Email: email } });

    // Si el usuario no existe, lo creamos
    if (!usuario) {
      usuario = await Usuario.create({
        Emp_Email: email,
        Contrasenia: id, // Puedes usar el ID de Facebook como contraseña temporal
        Nombre: name, // Guardamos el nombre de Facebook
      });
    }

    // Generamos el token
    const token = jwt.sign(
      {
        id: usuario.get('id'),
        IDRol: usuario.get('IDRol'),
      },
      process.env.SECRET_KEY || 'reprobadosporbaratos',
      { expiresIn: '1h' }
    );

    return res.json({
      id: usuario.get('id'),
      IDRol: usuario.get('IDRol'),
      token,
    });
  } catch (error) {
    console.error('Error al autenticar con Facebook:', error);
    return res.status(401).json({
      msg: 'Token de Facebook inválido',
    });
  }
};
