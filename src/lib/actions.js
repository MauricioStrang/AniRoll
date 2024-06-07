'use server'
import { User } from "./models";
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'


export const handleLogout = async () =>{
    await signOut();
}


//function to handle registers and returns states for registerForm
export const register = async(previousState,formData) =>{
    const {username, email, password, passwordRepeat} = Object.fromEntries(formData);

    if (password !== passwordRepeat){
        return {error:'Password does not match!'}
    }

    try {
        connectToDb();

        const user = await User.findOne({username})

        if(user){
            return {error: "Username already exists!"}
        }
        
        const salt = await bcrypt.genSalt(10);                      //idk basically hashes the password
        const hashedPassword = await bcrypt.hash(password, salt )   

        const newUser = new User({         //creates new User in the db with the User schema from models.js
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        console.log('saved new user to db')
        return {success: true}
    } catch (err) {
        console.log(err, 'could not save new user to db');
        return {error: 'Something went wrong'}
    }
}



// function to handle logins and returns states for loginForm 
export const login = async(previousState, formData) =>{         
    const {username, password} = Object.fromEntries(formData);

    try {
        await signIn('credentials', {username, password}) // signIn is a authJs function that need credentials as parameter. For paramaters
                                                          // we pass an object with the username and password from the loginForm
       
    } catch (err) {
        console.log(err, 'could not log in user');
        if(err.message.includes("CredentialsSignin")){       //isolating the error if the user enters wrong data
            return {error: "Invalid username or password"}
        }
        throw err;
    }
}