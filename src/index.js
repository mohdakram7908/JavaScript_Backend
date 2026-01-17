//require('dotenv').config({path:'./env'})

import dotenv from 'dotenv';
//import {DataBase} from './db/db.js';
import DataBase from "./db/db.js";

dotenv.config({
   path:'./env'
})

DataBase();









//  This is  The EMthod 1
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express"


// const app=express()
// (async()=>{
// try {

//      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//      app.on(error,(error)=>{
//         console.log("ERROR",error)
//      })
//      app.listen(process.env.PORT,()=>{
//         console.log(`App is listning on ${process.env.PORT}`)
//      })

    
// } catch (error) {
//     console.log(error)
//     throw error
// }
// })()

