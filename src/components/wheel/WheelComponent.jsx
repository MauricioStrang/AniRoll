//Wheel Component using wonderfull library
'use client'
import { useEffect, useState } from 'react'
import styles from './WheelComponent.module.css'
import { Wheel } from 'react-custom-roulette'

//Each of the partition of the wheel
const data = [
  { option: '',}, //default option to show something to the user
]

const WheelComponent = () => {


  useEffect(() => {
    
    const fetchPlanToWatch = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await fetch('/api/mal-plan-to-watch', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch plan to watch list');
        }
  
        const data = await response.json();
      } catch (error) {
        setError(error.message);

      }
    };

    
    return () => {
      fetchPlanToWatch
    };
  }, []); 


  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }


  const[wheelData, setWheelData] = useState(data)  //useState to handle the adding of new animes

  

  const handleGetAnimeClick = () => {
    let updatedData = wheelData;
    if (wheelData.length === 1 && wheelData[0].option === '') {
      updatedData = [];   //This is to remove the example first slice, we create a new empty array so only the ones that we put are shown
    }
    setWheelData([...updatedData, { option: 'example1' }]);  //the new wheel data, we use the spread operator to create
                                                    //a new array with all the data from the wheeldata plus the new options
  }

  return (

    <div className={styles.container}>
      <div className={styles.wheelContainer}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={wheelData}       
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



      <div className={styles.btnContainer}>

        {wheelData.length == 4 ?(  //When there is four elements on the wheel, button enables and you are able to spin
          <button className={styles.spinBtn} onClick={handleSpinClick}>SPIN</button>
        ) : (
          <button className={styles.inactiveSpinBtn}>SPIN</button>
        )}

      </div>


      <div className={styles.btnContainer}>

        {wheelData.length == 4 ?(  //When there is four elements on the wheel, button grays out and cannot add more
          <button className={styles.inactiveAnimeBtn} >GET ANIME</button>
        ) : (
          <button className={styles.getAnimeBtn} onClick={handleGetAnimeClick}>GET ANIME</button>
        )}

      </div>
    </div>  
    
  )
}

export default WheelComponent;