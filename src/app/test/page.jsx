//Page for random testing of function and component behaviours
'use client'
import { Wheel } from 'react-custom-roulette'
import AuthButton from '@/components/authButton/AuthButton';
import styles from './testPage.module.css'
import WatchListButton from '@/components/watchListButton/WatchListButton';

const testPage = () => {


   
    
    return (
        <div className={styles.container}>
            
            <h1>GENERATE AUTHORISATION</h1>
            <AuthButton />
            <div>
            <h1>Your Profile</h1>
            <WatchListButton />
            </div>

            <div className={styles.wheelContainer}>
                <Wheel
                mustStartSpinning={false}
                prizeNumber={3}
                data={['xd', 'fuck', 'penis']}       
                textColors={['#d2d4c8']}
                backgroundColors={['#7209b7','#4cc9f0', '#f72585', '#4361ee','#3a0ca3', ]} //wheel has 5 default colors
                radiusLineColor={"#250902"}
                innerBorderWidth= {1}
                radiusLineWidth	={3}
                onStopSpinning={() => {
                    setMustSpin(false);
                }}
                />
            </div>
        </div>           
  );
};

export default testPage;