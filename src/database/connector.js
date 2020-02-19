const sequelize = require("sequelize");
const config = require("../config/config");

const db=new sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
        host:config.db.host,
        dialect: "mysql",
        operatorsAliases: false,
        logging: config.db.logging,

        pool: {
            max :10,
            min: 0,
            acquire: 32000,
            idle: 10000
        }
    }
)
module.exports =db;
