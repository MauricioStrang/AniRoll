import { getProfile } from "@/lib/data";
import styles from "./userProfile.module.css";
import Image from "next/image";
import { connectToDb } from "@/lib/utils";

export const metadata = {
    title: " - AniRoll",           // username
    description: " page",
  };





const userProfile = async({params}) => {

    await connectToDb();

    const profile = await getProfile(params.slug);

    

    return (
        <div className={styles.container}>
            <h1>{profile.user.username}'s Profile</h1>
                {profile.pfp && (<div className={styles.pfpContainer}>
                <Image 
                src={profile.pfp}
                alt={`${profile.user.username}'s profile picture`}
                fill 
                className={styles.pfp}/>
                </div>)}
      
                <div className={styles.detail}>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{profile.createdAt.toString().slice(4, 16)}</span>
                </div>
                <div className={styles.content}>
                    {profile.desc}
                </div>
            </div>
        </div>
    )
}
export const dynamicParams = true;
export default userProfile;