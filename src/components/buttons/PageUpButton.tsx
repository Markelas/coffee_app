'use client'
import React from 'react';
import styles from "@/components/buttons/Buttons.module.scss";

const PageUpButton = () => {
    const toPageUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <button className={styles.footer__upBtn} onClick={toPageUp}></button>
    );
};

export default PageUpButton;
