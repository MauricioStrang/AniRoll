"use client"

import Wheel from "@/components/wheel/Wheel";
import styles from './rollPage.module.css'
import { getProfile } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";




const rollPage = async(session) => {

    const username = session?.user?.username;
    const [openBrg, setOpenBrg] = useState(false);
    const [openAvatar, setOpenAvatar] = useState(false);
  
    const profile = await getProfile('anna')

    // const username = session?.user?.username
    // const [profile, setProfile] = useState(null);

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //       if (username) {
    //         try {
    //           const profileData = await getProfile('anna');
    //           setProfile(profileData);
    //         } catch (error) {
    //           console.error('Failed to fetch profile:', error);
    //         }
    //       }
    //     };
    
    //     fetchProfile();
    //   }, [username]);

    return (
        <div>

            <h1>Spin the Wheel!</h1>
            <Wheel />

            <Image
            className={styles.avatarBtn}
            src={profile.pfp}
            alt="profile-picture"
            height={50}
            width={50}
            />

        </div>
    );
};

export default rollPage;