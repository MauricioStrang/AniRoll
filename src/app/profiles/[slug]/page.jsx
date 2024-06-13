import styles from "./userProfile.module.css";

export const metadata = {
    title: " - AniRoll",           // username
    description: " page",
  };

const userProfile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <h1>I am box 1</h1>
            </div>
            <div className={styles.box2}>
                <h2>I am box 2</h2>
            </div>
            <div className={styles.box3}>
                <h2>I am box 3</h2></div>
            </div>
    );
}

export default userProfile;