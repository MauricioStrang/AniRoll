// db functions to get data

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
    noStore()                                    //noStore tells that this components should not be cached, In case of changes in the profile we can see them on refresh
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch the user!')
    }
}



export const getProfiles = async () =>{
    try {
        await connectToDb();
        const profiles = await Profile.find();
        return profiles;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch profiles!')
    }
}


export const getProfile = async (slug) => {
    try {
        await connectToDb();
        const profile = await Profile.findOne({ slug });
        if (!profile) {
            throw new Error(`Profile with slug '${slug}' not found`);
        }
        return profile;
    } catch (err) {
        console.error(`Error fetching profile for slug '${slug}':`, err);
        throw new Error(`Failed to fetch the profile for slug '${slug}'`);
    }
}


export const getProfileFromUsername = async (username) =>{
    try {
        await connectToDb();
        const profile = await Profile.findOne({ slug });
        return profile;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch the profile!')
    }
}

