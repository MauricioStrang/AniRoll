"use client"

import { updateProfilePicture } from '@/lib/data';
import styles from './imageEditor.module.css'



//component to update pfp change to db into base 64 string
const ImageEditor = ({ username }) => {

    const convertToBase64 = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);                         

        reader.onload = async () => {
            const newPfp = reader.result; //get base64'd

            try {
                const updatedPfp = await updateProfilePicture(username, newPfp);
                console.log(`Updated pfp for '${username}'`);
                return updatedPfp;
            } catch (error) {
                console.error(`Error updating pfp for '${username}':`, error);
            }
        };

        reader.onerror = (err) => {
            console.log("Error: ", err);
        };
    };


    //function to activate the Input because I wan to hide the original one cause ugly
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className={styles.container}>
            <div className={styles.change} onClick={handleButtonClick}>
                Change Image
            </div>
            <input
                id="fileInput"
                accept="image/*"
                type="file"
                onChange={convertToBase64}
                className={styles.fileInput}
            />
        </div>
    );
};

export default ImageEditor;