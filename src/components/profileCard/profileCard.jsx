//This is going to be the body for each of the profiles shown in the users tab
import Image from 'next/image';
import styles from './profileCard.module.css'
import Link from 'next/link';




const ProfileCard = ({profile}) =>{            //receives a profile as a param

    const profileImageSrc = profile.pfp ? profile.pfp : '/noavatar.png';  // if the user has no profile picture use default noavatar

    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={profileImageSrc} alt="Profile picture" fill className={styles.img}/>    
            </div>
            <div className={styles.infoContainer}>
                <h1 className={styles.username}>{profile.slug}</h1>
                <Link href={`/profiles/${profile.slug}`} className={styles.link}>See Profile</Link>
            </div>
        </div>
        
    )
}

export default ProfileCard;