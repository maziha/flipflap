const db =require("../connector");
const sequelize = require("sequelize")
module.exports =db.define(
    "Manufacturer",
    {
        "Manufacturer_Name": {
            type: sequelize.STRING
        },
        "Location": {
            type:sequelize.STRING
        }
}
);