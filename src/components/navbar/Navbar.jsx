import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/links"
import Image from "next/image"

const Navbar = ()=>{

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}><Image src='/logo.png' width={200} height={80}/></Link>  
            <Links/> {/* calling Links subcomponent */}
        </div>
    )
}


export default Navbar