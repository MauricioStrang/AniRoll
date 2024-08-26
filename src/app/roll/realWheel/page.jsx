//Page for the real wheel that you'll be able to use once a month

import OfficialWheelComponent from '@/components/wheel/officialWheelComponent';
import styles from './realWheel.module.css'


export const metadata = {
    title: "Anime Wheel - AniRoll",
    description: "Anime Wheel page",
  };

const officialWheelPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wheelContainer}>
                <OfficialWheelComponent />
            </div>
        </div>
    )
};


export default officialWheelPage;