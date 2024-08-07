import { getProfile } from "@/lib/data";
import styles from "./userProfile.module.css";
import Image from "next/image";
import { auth } from "@/lib/auth";
import BioEditor from "@/components/bioEditor/bioEditor";
import ImageEditor from "@/components/ImageEditor/imageEditor";



export const generateMetadata = async ({ params }) => {   // making the metadata dynamic
    const { slug } = params;
    const profile = await getProfile(slug);

    return {
        title: `${profile.slug}'s profile`,         
        description: profile.desc,
    };
};

const userProfile = async ({ params }) => {

    const session = await auth();
    const { slug } = params; // de-structuring params to get slug
    const profile = await getProfile(slug);
    const username = session?.user?.username;

    const isOwner = username === profile.slug;  //if the session is the same as the slug you gain access to functions in your profile


    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.imgBtnContainer}>
                        <div className={styles.imgContainer}>
                            <Image
                                src={profile?.pfp || '/noavatar.png'}
                                alt="profile picture"
                                fill
                                className={styles.img}
                            />
                        </div>
                    {isOwner && (

                        //Component that handles the profile picture change
                        <div>
                            <ImageEditor username={username}/>
                        </div>
                        
                        
                    )}
                </div>


                <div className={styles.textContainer}>
                    <h1 className={styles.username}>{profile.slug}</h1>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>User since</span>
                        <span className={styles.detailValue}>
                            {profile.createdAt.toString().slice(4, 16)}
                        </span>
                    </div>
                    

                    {isOwner ? (
                        //bioeditor should handle the current session bio and it's changes
                        <BioEditor username={username} currentBio={profile.bio} />
                    ) : (

                        //If not an owner, just generate the bio without the change bio button
                        <div className={styles.bioContainer}>
                            <div className={styles.bio}>{profile.bio}</div>        
                        </div>
                    )}


                </div>
            </div>

            {/* FUTURE ROLLS TABS */}

            <div className={styles.bottomContainer}>
                <div className={styles.officialTab}>
                    <button>Official Rolls History</button>
                </div>
                <div className={styles.statsTab}>
                    <button>Stats</button>
                </div>
            </div>
        </div>
    );
};

export default userProfile;