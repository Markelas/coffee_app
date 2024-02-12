import React from 'react';
import Link from "next/link";
import styles from "./TheHeader.module.scss"

const TheHeader = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__logo}>StarBucks</h1>
            <nav className={styles.header__links}>
                <a href="/">Home</a>
                <a href="#">Select</a>
                <a href="#">Shop</a>
            </nav>
        </header>
    );
};

export default TheHeader;
