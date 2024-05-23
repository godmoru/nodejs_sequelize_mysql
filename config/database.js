const { Sequelize } = require("sequlize");

const env = process.env.NODE_MODE || "development";
const config = require("./config");

const sequelize = new Sequelize(config[env]);

module.exports = sequelize;
