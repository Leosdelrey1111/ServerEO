import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empleado = db.define('Empleado', {
    Emp_Nom: {
        type: DataTypes.STRING
    },
    Ape_Pat: {
        type: DataTypes.STRING
    },
    Ape_Mat: {
        type: DataTypes.STRING
    }, 
    Edad: {
        type: DataTypes.INTEGER
    },
    Emp_Telefono: {
        type: DataTypes.STRING
    },
    Emp_Email: {
        type: DataTypes.STRING
    },
    Contrasenia: {
        type: DataTypes.STRING
    },
    Estado: {
        type: DataTypes.BOOLEAN
    },
    IDRol: {
        type: DataTypes.INTEGER
    },
    IDSucursal: {
        type: DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false,
});

export default Empleado;