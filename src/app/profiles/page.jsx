import { getProfiles } from '@/lib/data';
import styles from './usersPage.module.css'
import ProfileCard from '@/components/profileCard/profileCard';


export const metadata = {
    title: "Users - AniRoll",
    description: "Users page",
  };


const usersPage = async() => {

    const profiles = await getProfiles();
    return (

        <div className={styles.container}>
            {profiles.map((profile)=>(
                <div className={styles.profile} key={profile.id}>
                    <ProfileCard profile={profile}/>
                </div>
            ))}
        </div>
            //We map the profiles from the db and create a 'profile card' for each one of them, and for each,
            //  we pass a profile to show the data
        
    )
}  


export default usersPage;