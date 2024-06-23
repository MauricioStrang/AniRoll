"use client"

import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { handleLogout } from "@/lib/actions";
import Link from "next/link";

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
        path: "/profiles"
    },
    {
        title: "Roll",
        path: "/roll"
    },
];


const Links = ({session})=>{      

    const [openBrg, setOpenBrg] = useState(false)
    const [openAvatar, setOpenAvatar] = useState(false)


    useEffect(() => {
        console.log("Session object:", session); // Log the session object for debugging
    }, [session]);

    const closeAvatar = () => {
        setOpenAvatar(false);        //closes the avatar menu
    };

    const handleLogoutConfirm = async () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            await handleLogout();                    //window is a user component so I need to call it here instead of actions.js
        }
    };


    const logOut = (event) => {
        event.preventDefault();
        handleLogoutConfirm();     //I need the logout button to do two actions so I need to create a new function.
        closeAvatar();
    };


    const username = session?.user?.username;

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
                        <Image
                        className={styles.avatarBtn}
                        src='/noavatar.png' 
                        alt="profile-picture" 
                        height={50} 
                        width={50} 
                        onClick = {()=> setOpenAvatar((prev)=> !prev)}
                        />
                        {openAvatar && <div className={styles.avatarLinks}>

                            <NavLink item = {{title: 'profile', path: `/profiles/${username}`}} onClick={closeAvatar}  />
                        
                            <form onSubmit={logOut}>
                                <button className={styles.logout}>Logout</button>    
                             </form>
                        
                        </div>}                      
                    </>
                    ) : (
                        <NavLink item = {{title: 'login', path: '/login'}}/>  
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
            onClick = {()=> setOpenBrg((prev) => !prev)}
            />       
            {openBrg && <div className={styles.mobileLinks}>  {/* setOpen function is called with a function as an argument. This function
                                                            receives the previous state value (prev) and returns the new state value. */}
            {links.map((link)=>(
            <NavLink item = {link} key={link.title}/>
            ))}{
                session?.user ? (
                <>
                    <Link href='./userProfile'>
                    <Image
                    className={styles.avatarBtn}
                    src='/noavatar.png' 
                    alt="profile-picture" 
                    height={50} 
                    width={50} 
                               
                    />
                    </Link>
                    
                         
                    <form action={logOut}>
                        <button className={styles.logout}>Logout</button>    
                    </form>
                </>
                ) : (
                    <NavLink item = {{title: 'login', path: '/login'}} />              
            )} 
            </div>}
        </div>
    )
}


export default Links;