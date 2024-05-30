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
            {/* we map through the links array to get each one of the objects and pass them to the NavLink
            subcomponent as a param */}

            </div>
        </div>
    )
}


export default Links;