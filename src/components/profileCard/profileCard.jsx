//This is going to be the body for each of the profiles shown in the users tab
import Image from 'next/image';
import styles from './profileCard.module.css'
import Link from 'next/link';




const ProfileCard = ({profile}) =>{            //receives a profile as a param

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                {profile.pfp && <div className={styles.imgContainer}>
                    <Image src={profile.pfp} alt="profile picture" fill className={styles.img}/>
                </div>}
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{profile.slug}</h1>
                <p className={styles.desc}>{profile.desc}</p>
                <Link href={`/profiles/${profile.slug}`} className={styles.link}>See Profile</Link>
            </div>
        </div>
        
    )
}

export default ProfileCard;