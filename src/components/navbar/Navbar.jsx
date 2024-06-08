import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/links"
import Image from "next/image"
import { auth } from "@/lib/auth"

const Navbar = async()=>{
    const session = await auth()
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}><Image src='/logo.png' width={200} height={80} alt="logo" priority="high"/></Link>  
            <Links session = {session}/> {/* calling Links subcomponent and passing session as a param */}
        </div>
    )
}


export default Navbar