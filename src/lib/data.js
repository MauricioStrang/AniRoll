// db functions to get data

"use server"

import { Profile, Roll, User } from "./models";
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
        const profile = await Profile.findOne({ slug })
        if (!profile) {
            throw new Error(`Profile '${slug}' not found`);
        }
        return profile
    } catch (err) {
        console.error(`Error fetching profile '${slug}':`, err);
        throw new Error(`Failed to fetch the profile '${slug}'`);
    }
}


export const getRolls = async () =>{
    try {
        await connectToDb();
        const rolls = await Roll.find();
        return rolls;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch rolls!')
    }
}





export const updateProfileBio = async (slug, newBio) => {
    try {
        await connectToDb();
        const updatedProfileBio = await Profile.findOneAndUpdate(
            { slug },             // findOneAndUpdate works by getting a filter (in this case the username)
            { bio: newBio },      // then gets the update input
            { new: true }         // and this new is to return the new bio instead of the last one
        );
        if (!updatedProfileBio) {
            throw new Error(`Profile '${slug}' not found`);
        }

        // Convert the Mongoose document to a plain JavaScript object
        const profileObj = updatedProfileBio.toObject();

        // Manually convert fields to simple values to avoid plain object error
        profileObj._id = profileObj._id.toString();
        profileObj.createdAt = profileObj.createdAt.toISOString();
        profileObj.updatedAt = profileObj.updatedAt.toISOString();

        return profileObj;
    } catch (err) {
        console.error(`Error updating profile bio for '${slug}'`, err);
        throw new Error(`Failed to update the profile bio for '${slug}'`);
    }
};


export const updateProfilePicture = async (slug, newPic) => {
    try {
        await connectToDb();
        const updatedProfilePic = await Profile.findOneAndUpdate(
            { slug },             // findOneAndUpdate works by getting a filter (in this case the username)
            { pfp: newPic },      // then gets the update input
            { new: true }         // and this new is to return the new bio instead of the last one
        );
        if (!updatedProfilePic) {
            throw new Error(`Profile with '${slug}' not found`);
        }

        // Convert the Mongoose document to a plain JavaScript object
        const profileObj = updatedProfilePic.toObject();

        // Manually convert fields to simple values to avoid plain object error
        profileObj._id = profileObj._id.toString();
        profileObj.createdAt = profileObj.createdAt.toISOString();
        profileObj.updatedAt = profileObj.updatedAt.toISOString();

        return profileObj;
    } catch (err) {
        console.error(`Error updating profile picture for '${slug}'`, err);
        throw new Error(`Failed to update the profile picture for '${slug}'`);
    }
};