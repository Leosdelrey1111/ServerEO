"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mr_macondo', 'root', 'celeste1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
exports.default = sequelize;
