import mongoose from "mongoose";

const connection = {};  //since we are using dev mode, we don't want to create a new connection every refresh, so we create this empty object

export const connectToDb = async ()=>{
    console.log(connection);
    try {
        if(connection.isConnected){
            console.log("Using existing connection"); 
            return;
        }
        // if there is no connection, create one and save the state on the object
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        console.error("Error connecting to the database:", error);
        throw new Error(`Could not connect to the database: ${error.message}`);
      }
};