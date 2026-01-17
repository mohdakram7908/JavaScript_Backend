import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DataBase= async()=>{
try {

     const COnnectionInstance= await mongoose.connect( `${process.env.MONGODB_URL}/${DB_NAME}`);
     console.log(`DB Connection is Done:${COnnectionInstance.connection.host}`);
     
      
    
} catch (error) {
    console.log("Error Has Occured.....",Error);

    process.exit(1);
    
    
}

}

export default DataBase;