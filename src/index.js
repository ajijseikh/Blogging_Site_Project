// require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const  mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://harshita1:HV8WXEqwmkGdfP0o@harshita.c31chtf.mongodb.net/blog-site", {
    
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

//<=============== path params id checking ===================================>
// app.use(function (req, res, next){
//     var err=new Error("not found");
//     err.status=404;
//     //next(err)
//     return res.send({status:404,msg:"path not found"})
// })


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});



    //   mobile- 8116431987 / 9598589796
