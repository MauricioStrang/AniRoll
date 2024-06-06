'use client'
import { login } from '@/lib/actions' 
import styles from './loginForm.module.css'
import {useFormState} from "react-dom"
import Link from 'next/link'

const LoginForm = () =>{

    const [state, formAction] = useFormState(login, undefined )  //update state based on the result of a form action.
                                                                 //login is the function to be called when the form is submitted 
                                                                 //undefined is the initial value
    return (
         <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            {state?.error} {/*if something goes wrong, login returns error to the state*/}
            <Link href="/register">Don't have an account yet? <b>Register</b></Link>

        </form>   
    )
}

export default LoginForm;