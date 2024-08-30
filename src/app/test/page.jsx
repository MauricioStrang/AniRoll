//Page for random testing of function and component behaviours
'use client'
import { Wheel } from 'react-custom-roulette'
import AuthButton from '@/components/authButton/AuthButton';
import styles from './testPage.module.css'
import WatchListButton from '@/components/watchListButton/WatchListButton';
import { useEffect, useState } from 'react';

const data = [
    { option: 'Option 1' },
    { option: 'Option 2' },
    { option: 'Option 3' },
    { option: 'Option 4' },
  ];


const testPage = () => {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    useEffect(() => {
        if (mustSpin) {
          console.log('mustSpin is true, animation should start now.');
        }
      }, [mustSpin]);

    const handleSpinClick = () => {
          console.log("Before setting mustSpin:", mustSpin); // Check before
          setMustSpin(true);
          console.log("After setting mustSpin:", mustSpin); // Check after
        
      };
   
    
    return (
        <div className={styles.container}>
            
            <h1>GENERATE AUTHORISATION</h1>
            <AuthButton />
            <div>
            <h1>Your Profile</h1>
            <WatchListButton />
            </div>

            <div>
            <Wheel
  mustStartSpinning={mustSpin}
  prizeNumber={prizeNumber}
  data={data}
  textColors={['#d2d4c8']}
  backgroundColors={['#7209b7','#4cc9f0', '#f72585', '#4361ee','#3a0ca3']}
  radiusLineColor={"#250902"}
  innerBorderWidth={1}
  radiusLineWidth={3}
  onStopSpinning={() => {
    console.log('Wheel stopped spinning');
    setMustSpin(false);
  }}
/>
      <button onClick={handleSpinClick}>Spin</button>
    </div>
        </div>           
  );
};

export default testPage;