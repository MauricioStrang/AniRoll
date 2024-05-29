'use client'

import styles from "./roulette.module.css"

import { useState, useEffect } from 'react';

const Roulette = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinRoulette = () => {
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * items.length);
    setTimeout(() => {
      setSelectedItem(items[randomIndex]);
      setSpinning(false);
    }, 3000); // Spin duration
  };

  useEffect(() => {
    if (selectedItem !== null) {
      alert(`Selected Item: ${selectedItem}`);
    }
  }, [selectedItem]);

  return (
    <div className={styles.rouletteContainer}>
      <div className={`${styles.roulette} ${spinning ? styles.spinning : ''}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.rouletteItem}
            style={{ transform: `rotate(${(360 / items.length) * index}deg)` }}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={spinRoulette} className={styles.spinButton}>
        Spin
      </button>
    </div>
  );
};

export default Roulette;