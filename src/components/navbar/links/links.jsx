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
    path: "/about"
  },
  {
    title: "Users",
    path: "/profiles"
  },
  {
    title: "Roll",
    path: "/roll"
  }
];

const Links = ({ session, profile }) => {
  
  const username = session?.user?.username;
  const [openBrg, setOpenBrg] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);


  const closeAvatar = () => {
    setOpenAvatar(false);
  };

  const handleLogoutConfirm = async () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      await handleLogout();
    }
  };

  const logOut = (event) => {
    event.preventDefault();
    handleLogoutConfirm();
    closeAvatar();
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            <div className={styles.avatarContainer}>
              <Image
                className={styles.avatarBtn}
                src={profile?.pfp || '/noavatar.png'}
                alt="profile-picture"
                height={50}
                width={50}
                onClick={() => setOpenAvatar((prev) => !prev)}
              />
              {openAvatar && (
                <div className={styles.avatarLinks}>
                  <NavLink
                    item={{ title: "profile", path: `/profiles/${username}` }}
                    onClick={closeAvatar}
                  />
                  <form onSubmit={logOut}>
                    <button className={styles.logout}>Logout</button>
                  </form>
                </div>
              )}
            </div>
          </>
        ) : (
          <NavLink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu button"
        width={30}
        height={30}
        onClick={() => setOpenBrg((prev) => !prev)}
      />
      {openBrg && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
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
                />
              </Link>
              <form action={logOut}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;