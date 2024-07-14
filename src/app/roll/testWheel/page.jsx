//test wheel that you can use how many times you want for either testing or fake rolls
import styles from './testWheel.module.css'
import WheelComponent from '@/components/wheel/WheelComponent';

const TestWheel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wheelContainer}>
          <WheelComponent/>
      </div>
    </div>  
  )
}

export default TestWheel;