import db from '../db/connection';
import{DataTypes} from 'sequelize'
const Usuario = db.define('Usuario', {
    Emp_Email:{
        type:DataTypes.STRING
    },
    Contrasenia:{
        type:DataTypes.STRING
    },
    IDRol: {
        type: DataTypes.INTEGER
    }
},
{
    createdAt:false,
    updatedAt:false
});

export default Usuario;