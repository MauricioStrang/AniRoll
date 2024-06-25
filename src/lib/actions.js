'use server'
import { User, Profile } from "./models";
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'


export const handleLogout = async () => {
    await signOut();
};


export const register = async (previousState, formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData); //data from the registerForm

    if (password !== passwordRepeat) {
        return { error: 'Password does not match!' };
    }

    try {
        connectToDb();

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return { error: "Username already exists!" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);  //hashing password idk

        const newUser = new User({
            username,
            email,                                      //creating new User on the db
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        console.log('saved new user to db');

        // At the samte time creating an user profile using the new user's ID
        const newProfile = new Profile({
            desc: 'change your description',
            pfp: '',
            slug: username,
            userId: savedUser._id,
        });
        await newProfile.save();

        return { success: true };  //dependencie to redirect to loginform after
    } catch (err) {
        console.log(err, 'could not save new user to db');
        return { error: 'Something went wrong' };
    }
};



// function to handle logins and returns states for loginForm 
export const login = async(previousState, formData) =>{         
    const {username, password} = Object.fromEntries(formData);

    try {
        await signIn('credentials', {username, password}) // signIn is a authJs function that need credentials as parameter. For paramaters
                                                          // we pass an object with the username and password from the loginForm
       
    } catch (err) {
        if(err.message.includes("CredentialsSignin")){       //isolating the error if the user enters wrong data
            return {error: "Invalid username or password"}
        }
        throw err;
    }
}