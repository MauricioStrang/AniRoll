//test wheel that you can use how many times you want for either testing or fake rolls

import styles from './testWheel.module.css'


export const metadata = {
    title: "Test Wheel - AniRoll",
    description: "Test Wheel page",
  };

const TestWheelPage = () => {
    return (
        <div className={styles.container}>
            <h1>
                Test Wheel Page
            </h1>
        </div>
    )
};


export default TestWheelPage;