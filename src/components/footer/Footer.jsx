import styles from "./footer.module.css"

const Footer = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Mauriex & KanadeT33</div>
            <div className={styles.text}>Mauriex design & thoughts non myAnimeList related</div>     
        </div>
    )
}

export default Footer;