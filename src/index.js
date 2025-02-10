const express = require("express");
const bodyParser = require("body-parser");
const {Airplane,City} = require("./models/index.js");
const ApiRoutes= require('./routes/index');
const { PORT } = require("./config/serverConfig.js");
const airport = require("./models/airport.js");
const { where } = require("sequelize");
const db = require("./models/index.js");
const setupAndStartServer =async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',ApiRoutes)
    
    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`)
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true})
        } 
        await Airplane.create({
            modelNumber:"Airbus A110"
        })
    })   

}

setupAndStartServer();