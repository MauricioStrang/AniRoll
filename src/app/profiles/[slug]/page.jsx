import { getProfile } from "@/lib/data";
import styles from "./userProfile.module.css";
import Image from "next/image";
import { auth } from "@/lib/auth";

export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    const profile = await getProfile(slug);

    return {
        title: `${profile.slug}'s profile`,
        description: profile.desc,
    };
};

const userProfile = async ({ params }) => {
    const session = await auth();
    const { slug } = params; // getting the slug from params
    const profile = await getProfile(slug);
    const username = session?.user?.username;

    const isOwner = username === profile.slug;

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
                        <button className={styles.changeImageButton}>
                            Change Image
                        </button>
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
                    
                    <div className={styles.bioContainer}>
                        <div className={styles.bio}>{profile.desc}</div>
                        {isOwner && (
                            <button className={styles.changeBioButton}>
                                Change Bio
                            </button>
                        )}
                    </div>
                </div>
            </div>
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