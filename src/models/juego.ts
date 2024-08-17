import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Juego = db.define('Juego', {
    Nom_Jueg: {
        type: DataTypes.STRING
    },
    Precio: {
        type: DataTypes.DOUBLE
    },
    Tiempo: {
        type: DataTypes.STRING
    },
    Dispon_Jueg: {
        type: DataTypes.BOOLEAN
    },
    Img_Jueg: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false,
});

export default Juego;