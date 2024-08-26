//test wheel that you can use how many times you want for either testing or fake rolls
import dynamic from 'next/dynamic';
import styles from './testWheel.module.css';

// got error with next js server side with wheelComponent, it tries to import and execute parts of the code during the server-side rendering phase,
// to make sure the component is only rendered on the client side.
const WheelComponent = dynamic(() => import('@/components/wheel/testWheelComponent'), {
  ssr: false, 
});

const TestWheel = () => {

return (
  <div className={styles.container}>
      <div className={styles.wheelContainer}>
        <WheelComponent/>
      </div>
  </div>
);
};

export default TestWheel;