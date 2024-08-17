import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Rol = db.define('Rol', {
    Nom_Rol: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false,
});

export default Rol;