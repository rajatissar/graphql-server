import { Sequelize } from 'sequelize';

const read_db = new Sequelize('mysql://root:14@localhost:3306/TEST101');

export { read_db };
