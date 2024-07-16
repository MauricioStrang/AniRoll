//Wheel Component
'use client'
import { useState } from 'react'
import styles from './WheelComponent.module.css'
import { Wheel } from 'react-custom-roulette'

//Each of the partition of the wheel
const data = [
  { option: '',},
  { option: '',},
  { option: '',},
]

const WheelComponent = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }


  const[addAnime, setAddAnime] = useState(data)

  const handleGetAnimeClick = ()=>{
  }

  return (

    <div className={styles.container}>
      <div className={styles.wheelContainer}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          textColors={['#d2d4c8']}
          backgroundColors={['#7209b7','#4cc9f0', '#f72585', '#4361ee','#3a0ca3', ]}
          radiusLineColor={"#250902"}
          innerBorderWidth= {1}
          radiusLineWidth	={3}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>



      <div className={styles.btnContainer}>

        {data.length == 4 ?(  //When there is four elements on the wheel, button enables and you are able to spin
          <button className={styles.spinBtn} onClick={handleSpinClick}>SPIN</button>
        ) : (
          <button className={styles.inactiveSpinBtn}>SPIN</button>
        )}

      </div>


      <div className={styles.btnContainer}>

        {data.length == 4 ?(  //When there is four elements on the wheel, button grays out and cannot add more
          <button className={styles.inactiveAnimeBtn} >GET ANIME</button>
        ) : (
          <button className={styles.getAnimeBtn} onClick={handleGetAnimeClick}>GET ANIME</button>
        )}

      </div>
    </div>  
    
  )
}

export default WheelComponent;