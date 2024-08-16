//Page for random testing of function and component behaviours


import AuthButton from '@/components/authButton/AuthButton';
import styles from './testPage.module.css'

const testPage = () => {

    return (
        <div className={styles.container}>
            
            <h1>GENERATE AUTHORISATION</h1>
            <AuthButton />
            
        </div>           
  );
};

export default testPage;