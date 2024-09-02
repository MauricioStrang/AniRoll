//Page for the real wheel that you'll be able to use once a month

import styles from './realWheel.module.css'
import dynamic from 'next/dynamic';


const OfficialWheelComponent = dynamic(() => import('@/components/wheel/officialWheelComponent'), {
    ssr: false, 
  });

export const metadata = {
    title: "Official Wheel - AniRoll",
    description: "Official wheel page",
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