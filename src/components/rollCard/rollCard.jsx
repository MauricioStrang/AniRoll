//This is going to be the body for each of the rolls shown in the history tab
import Image from 'next/image';
import styles from './rollCard.module.css'


const RollCard = ({roll}) =>{            //receives a roll as a param

    const animePicture = roll.picture

    return(
        <div className={styles.container}>
            <div className={styles.picContainer}>
                <Image src={animePicture} alt="Anime Picture" fill className={styles.pic}/>    
            </div>
            <div className={styles.infoContainer}>
                <h1 className={styles.title}>{roll.title}</h1>
            </div>
        </div>
        
    )
}

export default RollCard;