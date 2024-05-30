import styles from "./footer.module.css"

const Footer = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Mauriex</div>
            <div className={styles.text}>Mauriex thoughts non myAnimeList related</div>     
        </div>
    )
}

export default Footer;