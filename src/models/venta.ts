import db from '../db/connection';
import{DataTypes} from 'sequelize'
const Venta = db.define('Ventas', {

    Cant_vent:{
        type:DataTypes.INTEGER
    },
    TotalVent:{
        type:DataTypes.DOUBLE
    },
    IDProducto:{
        type:DataTypes.INTEGER
    },
   
    
},
{
    createdAt:false,
    updatedAt:false
});

export default Venta;
