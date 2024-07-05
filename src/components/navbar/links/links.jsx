"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { useState } from "react";
import { handleLogout } from "@/lib/actions";
import Link from "next/link";

const links = [
  {
    title: "Homepage",
    path: "/"
  },
  {
    title: "About",
    path: "/about" // links array for default navbar tabs
  },
  {
    title: "Users",
    path: "/profiles"
  },
  {
    title: "Roll",
    path: "/roll"
  },

  {
    title: "Test",
    path: "/test"
  }
];

const Links = ({ session, profile }) => {            //we get the current user session and it's profile as params

  const username = session?.user?.username;
  const [openBrg, setOpenBrg] = useState(false); //useState for opening and closing the burger button that you see in mobile mode
  const [openAvatar, setOpenAvatar] = useState(false); //useState for opening and closing menu when you click the profile picture

  const handleLogoutConfirm = async () => {
    const confirmed = window.confirm("Are you sure you want to logout?");  //function to be able to use the window.confirm in the logout
    if (confirmed) {
      await handleLogout();
    }
  };

  const logOut = (event) => {    
    event.preventDefault();   
    handleLogoutConfirm();
    setOpenAvatar(false); 
  };


  const handleCloseMenus = () => {
    setOpenAvatar(false);               // when clicking any of the tabs, close all the menus
    setOpenBrg(false); 
  };


  
  return (

    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} onClick={handleCloseMenus} />  
        ))}

        {session?.user ? (             //if there is a current session, make a profile picture appear, that has a menu to open when clicked
          <>
            <div className={styles.avatarContainer}>
              <Image
                className={styles.avatarBtn}
                src={profile?.pfp || "/noavatar.png"}  //if the user doesn't have a pfp, get default noavatar
                alt="profile-picture"
                height={50}
                width={50}
                onClick={() => setOpenAvatar((prev) => !prev)}
              />
              {openAvatar && (    //menu for going to profile or logout
                <div className={styles.avatarLinks}>
                  <NavLink
                    item={{ title: "profile", path: `/profiles/${username}` }}
                    onClick={handleCloseMenus}
                  />
                  <form onSubmit={logOut}>
                    <button className={styles.logout}>Logout</button>
                  </form>
                </div>
              )}
            </div>
          </>
        ) : (
          //if there is no current session, have a tab for login
          <NavLink
            item={{ title: "login", path: "/login" }}
            onClick={handleCloseMenus}
          />
        )}
      </div>



      <Image                //on mobile, have a menu dropdown
        className={styles.brgButton}
        src="/menu.png"
        alt="menu button"
        width={30}
        height={30}
        onClick={() => setOpenBrg((prev) => !prev)}
      />
      {openBrg && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} onClick={handleCloseMenus} />
          ))}
          {session?.user ? (
            <>
              <Link href={`/profiles/${username}`}>
                <Image
                  className={styles.avatarBtn}
                  src={profile?.pfp || "/noavatar.png"}
                  alt="profile-picture"
                  height={50}
                  width={50}
                  onClick={handleCloseMenus} // Close avatar menu on avatar click
                />
              </Link>
              <form action={logOut}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink
              item={{ title: "login", path: "/login" }}
              onClick={handleCloseMenus}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;