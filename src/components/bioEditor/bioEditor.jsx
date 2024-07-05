"use client"

import { useState } from "react";
import styles from "./BioEditor.module.css";
import { updateProfileBio } from "@/lib/data";

const BioEditor = ({ username, currentBio }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newBio, setNewBio] = useState(currentBio);

    const handleBioChange = async (e) => {
        e.preventDefault();
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
                        maxLength={50}
                        className={styles.bioInput}
                        value={newBio}
                        onChange={(e) => setNewBio(e.target.value)}
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