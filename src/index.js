// require("dotenv").config({path:'./env'});   cant use this syntax as i am using import syntax

import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"

import { app } from "./app.js"



( async ()=>{
    try{
        

      await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`) 
      console.log("database atlas connected successfully")
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port: ${process.env.PORT}`)});
           
    }catch(err){
        console.error("Error :",err)
    }

} )()

