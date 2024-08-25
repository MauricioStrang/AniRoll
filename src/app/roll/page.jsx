'use client'

import styles from "./rollHub.module.css"
import { useRouter } from "next/navigation"


const rollHub = ()=>{

    const router = useRouter()

    const testRedirect = ()=>{
        router.push('/roll/testWheel')
    }
    const realRedirect = ()=>{
        router.push('/roll/realWheel')
    }
    const historyRedirect = ()=>{
        router.push('/roll/history')
    }
    return(
        <div className={styles.container}>
                <div className={styles.btnContainer}>
                <button onClick={realRedirect} className={styles.btn}>Official Anime Wheel</button>
                </div>

                <div className={styles.btnContainer}>
                    <button onClick={testRedirect} className={styles.btn}>Test Anime Wheel</button>
                </div>

                <div className={styles.btnContainer}>   
                <button onClick={historyRedirect} className={styles.btn}>History</button>
                </div>
        </div>
    );
}


export default rollHub