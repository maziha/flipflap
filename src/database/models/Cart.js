const db =require("../connector");
const sequelize = require("sequelize")
module.exports =db.define(
    "Cart",
    {
        "Count": {
            type: sequelize.INTEGER
        }
}
);