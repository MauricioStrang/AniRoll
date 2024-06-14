import styles from './usersPage.module.css'


export const metadata = {
    title: "Users - AniRoll",
    description: "Users page",
  };

const usersPage = () => {
    return (
        <div className={styles.container}>
            <h1>
                Users List Page
            </h1>
        </div>
    )
};


export default usersPage;