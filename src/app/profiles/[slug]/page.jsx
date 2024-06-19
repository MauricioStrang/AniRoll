import { getProfile } from "@/lib/data";
import styles from "./userProfile.module.css";
import Image from "next/image";

export const metadata = {
    title: " - AniRoll",           // username
    description: " page",
  };

const userProfile = async({params}) => {

    const {slug} = params;

    const profile = await getProfile(slug)

    return (
        <div className={styles.container}>
                {profile.pfp && (<div className={styles.pfpContainer}>
                <Image 
                src={profile.pfp}
                alt="profile picture" 
                fill 
                className={styles.pfp}/>
                </div>)}
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{profile.slug}</h1>
                <div className={styles.detail}>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{profile.createdAt.toString().slice(4, 16)}</span>
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