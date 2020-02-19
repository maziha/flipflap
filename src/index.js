const express = require('express');
const bodyParser = require('body-parser');
const db = require("./database/connector");
const router =require('./api')
const app = express();
const port = 3200;
app.use(bodyParser.json())
app.use("/", router)
app.get('/',(req, res) => {res.send('FlipFlap'); 
});
app.post('/',(req, res) => {console.log(req.body);
});
app.post('/',(req, res) => {console.log(req.body); res.json({status: "executed"})
});
db.authenticate().then(() => {
    console.log("DB AUTHENTICATED");
    require("./database/schemaInitializer");
}).catch((err) => {
    console.log(err);
})
app.listen(port, () => { console.log(`Server running on ${port}`)
});