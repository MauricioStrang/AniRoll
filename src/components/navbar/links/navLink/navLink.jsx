"use client";

// We need to create this navLink subcomponent because it uses a client hook, links.jsx is going to use server components

import Link from "next/link";
import styles from "./navlink.module.css"
import { usePathname } from "next/navigation";


const NavLink = ({item}) =>{

    const pathName = usePathname(); // usePathname is a CLIENT Component hook that lets you read and use the current URL's pathname.

    return (
        <div className={styles.container}>
            <Link href= {item.path} className={`${styles.container} ${
                pathName === item.path && styles.active
            }`}>
                {item.title}
             </Link>
            {/* This is going to show each of the item passed in params in the navbar with Link component
            IF you click on a tab, the pathName is referring to that tab, enabling styles.active for that specific tab.  */}
        </div>
    )
}

export default NavLink;