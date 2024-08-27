//tools to interact with database. It creates a constructor function, they provide a structure based on the schema
//for the documents in collections to perform CRUD.
import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
        
        },
    },
    {timestamps: true}
);

const profileSchema = new mongoose.Schema(
    {
        bio: {
            type: String,
            min: 3,
            max: 120,
        },
        pfp: {
            type: String,
        },
        userId: {
            type: String,
            required: true, 
        },
        slug:{
            type: String,
            unique: true,
            required: true,
        }
    },
    {timestamps: true}
)


const rollSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true
        },

        title:{
            type: String,
            required: true
        },

        picture:{
            type: String,
            required: true
        }
    },
    {timestamps: true}
)


export const User = mongoose.models?.User || mongoose.model('User', userSchema);
export const Profile = mongoose.models?.Profile || mongoose.model('Profile', profileSchema);
export const Roll = mongoose.models?.Roll || mongoose.model('Roll', rollSchema);
//This line ensures that User or Profile is assigned to the model. If the model already exists in mongoose.models,
// it uses that existing model. If it doesn't exist, it creates a new one using the schema.