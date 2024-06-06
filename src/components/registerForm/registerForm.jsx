'use client'
import { register } from '@/lib/actions'
import styles from './registerForm.module.css'
import {useFormState} from "react-dom"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RegisterForm = () =>{

    const [state, formAction] = useFormState(register, undefined )  //update state based on the result of a form action.
                                                                    //register is the function to be called when the form is submitted 
                                                                    //undefined is the initial value
    
    const router = useRouter();

    useEffect(()=>{
        state?.success && router.push("login")  //register function will return success and will redirect to login
    },[state?.success, router]) //dependencies

    return (
         <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="password again" name="passwordRepeat" />
            <button>Register</button>
            {state?.error} {/*if something goes wrong, register returns error to the state*/}
            <Link href="/login">Have an account? <b>Login</b></Link>
        </form>   
    )
}

export default RegisterForm;