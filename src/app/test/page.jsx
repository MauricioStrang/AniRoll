//Page for random testing of function and component behaviours
'use client'
import { Wheel } from 'react-custom-roulette'
import AuthButton from '@/components/authButton/AuthButton';
import styles from './testPage.module.css'
import WatchListButton from '@/components/watchListButton/WatchListButton';
import { useEffect, useState } from 'react';



const testPage = () => {


   
    
    return (
        <div className={styles.container}>
            
            <h1>GENERATE AUTHORISATION</h1>
            <AuthButton />
            <div>
            <h1>Your Profile</h1>
            <WatchListButton />
            </div>
        </div>           
  );
};

export default testPage;