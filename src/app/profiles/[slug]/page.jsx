//this is the body for each of the users private profiles

import { getProfile } from "@/lib/data";
import styles from "./userProfile.module.css";
import Image from "next/image";

export const metadata = {
    title: " - AniRoll",           // username
    description: " page",
  };


const userProfile = async({params}) => {    //de-estructing params gets a slug of whatever it comes after profiles


    const {slug} = params;                     // getting the slug from params
    const profile = await getProfile(slug);

    return (
        <div className={styles.container}>
            {profile.pfp && (<div className={styles.imgContainer}>
                <Image 
                src={profile.pfp}
                alt="profile picture" 
                fill 
                className={styles.img}/>
            </div>)}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{profile.slug}</h1>
                <div className={styles.detail}>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Created</span>
                        <span className={styles.detailValue}>{profile.createdAt.toString().slice(4, 16)}</span>   {/* slice to just show month, day and year */}               
                    </div>
                </div>
                <div className={styles.content}>
                    {profile.desc}
                </div>
            </div>
        </div>
    )
}

export default userProfile;