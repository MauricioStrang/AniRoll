import styles from "./about.module.css";

export const metadata = {
    title: "About - AniRoll",
    description: "About page",
  };

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>

                <h1 className={styles.title}>
                    About AniRoll
                </h1>
                <h2 className={styles.subtitle}>
                    What is AniRoll?
                </h2>
                <p className={styles.desc}>
                    AniRoll is a site made to create wheels based on your myAnimeList profile
                </p>

                <h2 className={styles.subtitle}>
                    How does this work?
                </h2>
                <p className={styles.desc}>
                    When you create your account, your username and data is linked with that of myAnimeList plan to watch list.
                    Then you have an user profile where you can once a month roll a wheel to be your "anime of the month"
                    We plan to create more functions so you can see what animes on what months you watched and compare this
                    with other people and friends profiles.
                </p>

                <h2 className={styles.subtitle}>
                    What is the purpose?
                </h2>
                <p className={styles.desc}>
                    This is kind of game that we created as friends to motivate eachother to watch more anime. 
                    We used to do this with a generic wheel and getting info by hand, but as developers we decided 
                    to make it a project for ourselves and whoever that may find this useful too.
                </p>

            </div>
        </div>
    );
}

export default AboutPage;