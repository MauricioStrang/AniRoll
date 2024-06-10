import styles from "./profile.module.css";

export const metadata = {
    title: "[username] - AniRoll",
    description: "[username] profile",
  };

const ProfilePage = () => {
    return (
        <div className={styles.container}>
            <h1>Hello profile</h1>
        </div>
    );
}

export default ProfilePage;