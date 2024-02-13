import React from 'react';
import styles from "@/app/page.module.css"

const WeHaveSection = () => {
    return (
        <section className={styles.weHave}>
            <div className={styles.weHave__box}>
                <div className={styles.weHave__box__item}>
                    <img src="/img/HomePage/WeHaveHeart.png" alt="Heart"/>
                    <h4 className={styles.weHave__box__item__title}>Tasty</h4>
                    <p className={styles.weHave__box__item__descr}>We have the most<br/>delicious coffee</p>
                </div>
                <div className={styles.weHave__box__item}>
                    <img src="/img/HomePage/WeHaveRocket.png" alt="Heart"/>
                    <h4 className={styles.weHave__box__item__title}>Fast</h4>
                    <p className={styles.weHave__box__item__descr}>Our cafe will serve<br/>you quickly</p>
                </div>
                <div className={styles.weHave__box__item}>
                    <img src="/img/HomePage/WeHaveMoney.png" alt="Heart"/>
                    <h4 className={styles.weHave__box__item__title}>Available</h4>
                    <p className={styles.weHave__box__item__descr}>Cafe will serveat the<br/>most pleasant prices</p>
                </div>
            </div>
        </section>
    );
};

export default WeHaveSection;
