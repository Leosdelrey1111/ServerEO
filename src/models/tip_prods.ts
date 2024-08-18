import db from '../db/connection';
import{DataTypes} from 'sequelize'
const tip_Prods = db.define('tip_Prod', {

    Tipo_Prod:{
        type:DataTypes.STRING
    },
    
    
},
{
    createdAt:false,
    updatedAt:false
});

export default tip_Prods;
