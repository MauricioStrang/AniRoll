//Page for random testing of function and component behaviours

import Wheel from "@/components/wheel/Wheel";
import styles from "./testPage.module.css"
import { getProfile, updateProfileBio } from "@/lib/data";
import ImageEditor from "@/components/ImageEditor/imageEditor";

const testPage = async() => {

    const anna = await getProfile('anna')

    const username = anna.slug
    const updateNow = await updateProfileBio(username, 'hehe')

    return (
        <div>
            <h1>Spin the Wheel!</h1>
            <Wheel />
            <div className={styles.updateContainer}>
                <form action={updateNow}>
                    <button>UPDATE ANNA NOW</button>
                </form>
            </div>

            <b></b><b></b><b></b><b></b>
            <ImageEditor username={username}/>
        </div>
    );
};

export default testPage;