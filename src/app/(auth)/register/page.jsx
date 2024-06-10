import RegisterForm from '@/components/registerForm/registerForm'
import styles from './register.module.css'

export const metadata = {
    title: "Register - AniRoll",
    description: "Register page",
  };
  
const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>  
                <RegisterForm/> 
            </div> 
        </div>
    )
}  

export default RegisterPage