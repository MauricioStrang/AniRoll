import { Profile, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";



export const getUsers = async () =>{
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch users!')
    }
}

export const getUser = async (id) =>{
    noStore()
    try {
        connectToDb();
        const user = await User.findById(id);
        console.log(user)
        return user;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch user!')
    }
}


export const getProfile = async (slug) =>{
    try {
        connectToDb();
        const profile = await Profile.findOne({slug});
        return profile;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch profile!')
    }
}
