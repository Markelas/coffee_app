import React from 'react';
import styles from "@/app/page.module.css"

const WeMakeSection = () => {
    return (
        <section className={styles.weMake}>
            <div className={styles.weMake__boximg}>
                <img className={styles.weMake__img} src="/img/HomePage/WeMake_Photos.png" alt="Photo Cafe"/>
            </div>
            <div className={styles.weMake__info}>
                <h2>We make<br/><strong>delicious</strong></h2>
                <p>Only in 2021 we have made more than 100,000<br/>orders for you, your loved ones, all of you, and
                    in<br/>2022 we are ready to destroy the market</p>
                <iframe width="447" height="275" src="https://www.youtube.com/embed/o-Ikkh5oxuo?si=c4eT3YkO606q19UE"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
        </section>
    );
};

export default WeMakeSection;
