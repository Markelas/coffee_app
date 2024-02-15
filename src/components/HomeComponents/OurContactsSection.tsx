import React from 'react';
import styles from "@/app/page.module.css";

const OurContactsSection = () => {
    return (
        <section className={styles.ourContacts}>
            <div className={styles.ourContacts__info}>
                <h2>Our<br/><strong>Contacts</strong></h2>
                <p>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!</p>
                <a href='https://github.com/Markelas' className={styles.ourContacts__inst}>@markelas</a>
                <a href='tel:+79999999999' className={styles.ourContacts__phone}>+7-999-999-99-99</a>
            </div>
            <img src="/img/HomePage/OurContacts.png" alt="Cafe Photo"/>
        </section>
    );
};

export default OurContactsSection;
