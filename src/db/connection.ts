import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mr_macondo', 'root', 'celeste1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });

export default sequelize;