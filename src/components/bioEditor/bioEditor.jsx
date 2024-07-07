"use client"

import { useState } from "react";
import styles from "./BioEditor.module.css";
import { updateProfileBio } from "@/lib/data";


const BioEditor = ({ username, currentBio }) => {  //we pass the username and the last bio before change
    

    const [isEditing, setIsEditing] = useState(false); //Controls the opening and closing of the editing textarea box

    // State to hold the value of the bio being edited. defaulted to current Bio.
    const [newBio, setNewBio] = useState(currentBio); 


    const handleBioChange = async (e) => {
        e.preventDefault(); //stops the form from submitting in the traditional way, handleling the submission with JavaScript instead. (idk breaks everything if not)
        try {
            const updatedBio = await updateProfileBio(username, newBio);
            console.log(`Updated bio for name '${username}'`);
            setIsEditing(false);  // Stop editing after saving
            return updatedBio;
        } catch (err) {
            console.error(`Error updating bio for name '${username}':`, err);
        }
    };

    return (
        <div className={styles.bioContainer}>
            {isEditing ? (
                <form onSubmit={handleBioChange}>
                    <textarea
                        minLength={3}
                        maxLength={120}
                        className={styles.bioInput}
                        value={newBio}  //display the current value of newBio so you can see the bio text when you open the textarea.
                        onChange={(e) => setNewBio(e.target.value)} //sets up an event listener to update the newBio state. Every time the user types in the textarea, the onChange event triggers.
                    />
                    
                    <button type="submit" className={styles.saveBioButton}>
                        Save
                    </button>
                    <button
                        type="button"
                        className={styles.cancelBioButton}
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </form>
            ) : (
                <>

                {/* default behaviour, just show the bio and the buttons for the owner */}
                    <div className={styles.bio}>{currentBio}</div>
                    <button
                        className={styles.changeBioButton}
                        onClick={() => setIsEditing(true)}
                    >
                        Change Bio
                    </button>
                </>
            )}
        </div>
    );
};

export default BioEditor;