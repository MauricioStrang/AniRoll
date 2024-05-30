import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/links"

const Navbar = ()=>{

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Rolls</Link>
            <Links/>
        </div>
    )
}


export default Navbar