import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Notas = db.define('Notas', {
    Remi_Nota: {
        type: DataTypes.STRING
    },
    Nota_Glob: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false,
});

export default Notas;