import styles from "./links.module.css"
import NavLink from "./navLink/navLink";



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
    {
        title: "Profile",
        path: "userProfile"
    }
];


const Links =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link =>(
                    <NavLink item = {link} key = {link.title}/>
                )))}
            </div>
        </div>
    )
}


export default Links;