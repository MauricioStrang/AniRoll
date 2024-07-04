"use client"

import { useState } from "react";
import styles from "./BioEditor.module.css";
import { updateProfileBio } from "@/lib/data";

    

const BioEditor = ({ slug, currentBio, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newBio, setNewBio] = useState(currentBio);


    const handleBioChange = async (e) => {
        updateProfileBio()
    };

    return (
        <div className={styles.bioContainer}>
            {isEditing ? (
                <form onSubmit={handleBioChange}>
                    <textarea
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