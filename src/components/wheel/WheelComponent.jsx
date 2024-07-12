//test wheel that you can use how many times you want for either testing or fake rolls
'use client'
import { useState } from 'react'
import styles from './WheelComponent.module.css'
import { Wheel } from 'react-custom-roulette'

//wheeel of names
const data = [
  { option: '0',},
  { option: '1',},
  { option: '2',},
  { option: 'Kas',},
  { option: 'Ksd',},
  { option: 'Kasdasas',},
  { option: 'Kaasdass',},
  { option: 'Kasdwas',}
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

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        textColors={['#d2d4c8']}
        backgroundColors={['#ad2831', '#800e13','#640d14', '#38040e']}
        radiusLineColor={"#250902"}
        innerBorderWidth= {1}
        radiusLineWidth	={3}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default WheelComponent;