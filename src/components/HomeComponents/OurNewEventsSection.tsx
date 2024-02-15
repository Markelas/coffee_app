import React from 'react';
import styles from "@/app/page.module.css"

// const eventItems = [
//     {
//         id: 0,
//         title: 'TWO COFFEE FOR 1 PRICE',
//         imgUrl: '/img/HomePage/OurNewEvents/two_coffee.png'
//     },
//     {
//         id: 1,
//         title: 'KITCHEN TOUR',
//         imgUrl: '/img/HomePage/OurNewEvents/two_coffee.png'
//     },
//     {
//         id: 2,
//         title: 'FREE COFFEE FOR 3 COFFEE',
//         imgUrl: '/img/HomePage/OurNewEvents/two_coffee.png'
//     },
//     {
//         id: 3,
//         title: 'OUR INSTAGRAM',
//         imgUrl: '/img/HomePage/OurNewEvents/two_coffee.png'
//     },
//     {
//         id: 4,
//         title: 'WHERE ARE YOU CHOOSE US?',
//         imgUrl: '/img/HomePage/OurNewEvents/two_coffee.png'
//     },
// ]
const OurNewEventsSection = () => {
    return (
        <section className={styles.newEvents}>
            <div className={styles.newEvents__head}>
                <p>Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                <h2>Our New <br/><strong>Events</strong></h2>
            </div>
            <div className={styles.newEvents__box}>
                <div className={styles.newEvents__box__bigCard}>
                    <h4>TWO COFFEE<br/>FOR 1 PRICE</h4>
                    <button>More</button>
                </div>
                <div className={styles.newEvents__box__bigCard}>
                    <h4>KITCHEN<br/>TOUR</h4>
                    <button>More</button>
                </div>
                <div className={styles.newEvents__box__minCard}>
                    <h4>FREE COFFEE<br/>FOR 3 COFFEE</h4>
                    <button>More</button>
                </div>
                <div className={styles.newEvents__box__minCard}>
                    <h4>OUR<br/>INSTAGRAM</h4>
                    <button>More</button>
                </div>
                <div className={styles.newEvents__box__minCard}>
                    <h4>WHERE ARE YOU<br/>CHOOSE US?</h4>
                    <button>More</button>
                </div>
            </div>
        </section>
    );
};

export default OurNewEventsSection;
