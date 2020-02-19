const Product = require("./models/Product")
const Properties = require("./models/Properties")
const Category = require("./models/Category")
const Manufacturer = require("./models/Manufacturer")
const Cart = require("./models/Cart")
const db = require("./connector");

Product.hasOne(Properties);
//Product.hasMany(Properties);
Product.belongsTo(Category);

Product.belongsToMany(Manufacturer, {
    through: "Product_Manufacturer",
    foreignKey: "ID",
    otherKey: "Manufacturer_id",
    timestamp:"false"
})


Manufacturer.belongsToMany(Product, {
    through: "Product_Manufacturer",
    foreignKey: "Manufacturer_id",
    otherKey: "ID",
    timestamp:"false"
})

db.sync()
