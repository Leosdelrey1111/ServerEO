import { DataTypes } from 'sequelize';
import db from '../db/connection';

const distribuidors = db.define('distribuidors', {
    Nom_Distr: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false,
});

export default distribuidors;