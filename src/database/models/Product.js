const db =require("../connector");
const sequelize = require("sequelize")
module.exports =db.define(
    "Product",
    {
        "Product_Name": {
            type: sequelize.STRING
        },
        "Price": {
            type:sequelize.DOUBLE
        }
}
);