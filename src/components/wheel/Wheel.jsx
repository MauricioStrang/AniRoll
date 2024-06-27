'use client'

import { useState, useRef } from 'react';
import styles from './Wheel.module.css'; // Import your CSS styles here

const Wheel = () => {
    const [items, setItems] = useState([]);
    const wheelRef = useRef(null);

    const addItem = () => {
        const newItem = prompt('Enter a new item:');
        if (newItem) {
            setItems([...items, newItem]);
        }
    };

    const spinWheel = () => {
        // Implement spinning logic here
        // For simplicity, let's just select a random item
        const randomIndex = Math.floor(Math.random() * items.length);
        alert(`Winner: ${items[randomIndex]}`);
    };

    return (
        <div className={styles.container}>
            <div ref={wheelRef} className={styles.wheel}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>{item}</div>
                ))}
            </div>
            <button onClick={spinWheel} className={styles.spinButton}>
                Spin Wheel
            </button>
            <button onClick={addItem} className={styles.addButton}>
                Add Item
            </button>
        </div>
    );
};

export default Wheel;