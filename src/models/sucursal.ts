import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Sucursal = db.define('Sucursal', {
    Nom_Suc: {
        type: DataTypes.STRING
    },
    Loc_Suc: {
        type: DataTypes.STRING
    },
    Des_Suc: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false,
});

export default Sucursal;