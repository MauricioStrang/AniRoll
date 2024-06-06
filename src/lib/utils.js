import mongoose from "mongoose";

const connection = {};

export const connectToDb = async ()=>{

    console.log(connection);
    try {
        if(connection.isConnected){
            console.log("Using existing connection"); 
            return;
        }
        if (!process.env.MONGO) {
            throw new Error("MONGO environment variable is not defined");
        }
        
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        console.error("Error connecting to the database:", error);
        throw new Error(`Could not connect to the database: ${error.message}`);
      }
};