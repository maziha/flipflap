const express = require('express');
const Product = require("./database/models/Product");
const Manufacturer = require("./database/models/Manufacturer");
const router = express.Router();
router.get("/",(req, res) => {
    Product.findAll({
        include: [{model:Manufacturer}]
    }).then(res1 => {
        res.json(res1);
    });
});

router.post("/product",(req, res) => {
    if(req.body !==null){
    console.log(req.body);
    let newPdt = {
        Name:req.body.Name,
        Price:req.body.Price
    };
    let newManu = req.body.manufacturer
    Product.create(newPdt).then(pdt => {
        Manufacturer.findOne({where: {id : newManu }}).then(resManu => {
       pdt.setManufacturers(resManu)
            console.log("saved");
       });
    });
    }
    res.json({status: "executed"});
    });
    /*router.post("/Manufacturers", (req, res) => {
        if(req.body!==null) {
            console.log(req.body);
        }
    })*/
module.exports=router;