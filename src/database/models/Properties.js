const db =require("../connector");
const sequelize = require("sequelize")
module.exports=db.define(
    "roperties",
    {
        "Colour": {
            type: sequelize.STRING
        },
        "Weight": {
            type:sequelize.INTEGER
        }
}
);