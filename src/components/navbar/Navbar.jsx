import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/links"
import Image from "next/image"
import { auth } from "@/lib/auth"
import { getProfile } from "@/lib/data"

const Navbar = async()=>{
    const session = await auth()
    //this is to handle when there is no user loggedin to not get errors
    const profile = session ? await getProfile(session?.user?.username) : "NoUser"
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}><Image src='/logo.png' width={200} height={80} alt="logo" priority="high"/></Link>  
            <Links session = {session} profile = {profile}/> {/* calling Links subcomponent and passing session and profile as a param */}
        </div>
    )
}


export default Navbar