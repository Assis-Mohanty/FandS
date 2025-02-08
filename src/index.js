const express = require("express");
const bodyParser = require("body-parser");
const {City} = require("./models/index.js");
const ApiRoutes= require('./routes/index');
const { PORT } = require("./config/serverConfig.js");
const setupAndStartServer =async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',ApiRoutes)
    
    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`)
        
    })   

}

setupAndStartServer();