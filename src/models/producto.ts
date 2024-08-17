import db from '../db/connection';
import{DataTypes} from 'sequelize'
const Producto = db.define('Producto', {
    Nom_Prod:{
        type:DataTypes.STRING
    },
    Tipo_Prod:{
        type:DataTypes.STRING
    },
    Link_img:{
        type:DataTypes.STRING
    },
    Exist_Prod:{
        type:DataTypes.INTEGER
    },
    Prec_Prod:{
        type:DataTypes.FLOAT
    },
    Desc_Prod:{
        type:DataTypes.DOUBLE
    },
    IDSucursal:{
        type:DataTypes.CHAR
    },
    IDDistribuidor:{
        type:DataTypes.CHAR
    },
    Img_Prod: {
        type: DataTypes.STRING
    },
    
},
{
    createdAt:false,
    updatedAt:false
});

export default Producto;
