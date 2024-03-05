import { Sequelize } from "sequelize";


const sequelize = new Sequelize('almacen', 'root', 'juanjo2905jj', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;