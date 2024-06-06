import styles from "./login.module.css"
import LoginForm from "@/components/loginForm/loginForm"

const LoginPage =() => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <LoginForm/>
            </div> 
        </div>
    )
}  

export default LoginPage    