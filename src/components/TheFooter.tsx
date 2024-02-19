import React from 'react';
import styles from "./TheFooter.module.scss"
import PageUpButton from "@/components/buttons/PageUpButton";
const TheFooter = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <h2>StarBucks</h2>
                <nav>
                    <ul>
                        <li><a href="#">Main</a></li>
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">We make</a></li>
                        <li><a href="#">Process</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Products</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Drinks</a></li>
                        <li><a href="#">Eat</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Number</a></li>
                    </ul>
                </nav>
                <PageUpButton/>
            </div>
            <div className={styles.footer__bottom}>
                <a href='tel:+79999999999'>+7-999-999-99-99</a>
                <a href='https://github.com/Markelas'>GitHub</a>
            </div>
        </footer>
    );
};

export default TheFooter;
