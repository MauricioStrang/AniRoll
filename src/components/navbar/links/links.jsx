"use client"

import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { useState } from "react";


const links =[
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Users",
        path: "/users"
    },
    {
        title: "Roll",
        path: "/roll"
    },
];


const Links =()=>{

    const [open, setOpen] = useState(false)


    const session = {   // Temporary for example
        user : false
    }

    return(
        <div className={styles.container}>
            <div className={styles.links}>
                
                {links.map((link =>(       
                    <NavLink item = {link} key = {link.title}/>
                     /* we map through the links array to get each one of the objects and pass them to the NavLink
                    subcomponent as a param */

                )))}{
                    session?.user ? (
                    <>
                        <NavLink item = {{title: 'profile', path: '/profile'}} />       
                    </>
                    ) : (
                        <NavLink item = {{title: 'login', path: '/login'}} />  
                        // This is an If statement that checks if there is an user session currently, if there is, show a profile tab
                        // else add a login tab that redirects to the login form.             
                )} 
            </div>
            <Image 
            className={styles.menuButton}
            src='/menu.png' 
            alt='menu button' 
            width={30} 
            height={30} 
            onClick = {()=> setOpen((prev) => !prev)}/>       
            {open && <div className={styles.mobileLinks}>  {/* setOpen function is called with a function as an argument. This function
                                                            receives the previous state value (prev) and returns the new state value. */}
            {links.map((link)=>(
            <NavLink item = {link} key={link.title}/>
            ))}{
                session?.user ? (
                <>
                    <NavLink item = {{title: 'profile', path: '/profile'}} />     
                </>
                ) : (
                    <NavLink item = {{title: 'login', path: '/login'}} />              
            )} 
            </div>}
        </div>
    )
}


export default Links;