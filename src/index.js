const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json())
app.get('/',(req, res) => {res.send('FlipFlap'); 
});
app.post('/',(req, res) => {console.log(req.body);
    let ag=[]
    let De=[]
    let Na=[]
    for(i=0;i<req.body.length;i++)
    {
        Na.push(req.body[i].Name);
        ag.push(req.body[i].Age);
        De.push(req.body[i].Dept);
    
}
res.json({status:Na,ag,De})
});
app.listen(port, () => { console.log(`Server running on ${port}`)
});