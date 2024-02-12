import React from "react";
import styles from "./page.module.css"
import PromoTextGreenCircle from "@/components/circles/PromoTextGreenCircle";
import GreenButton from "@/components/buttons/GreenButton";
import BlackButton from "@/components/buttons/BlackButton";

export default function Home() {
  return (
      <main>
          <section className={styles.promo}>
              <div className={styles.promo__info}>
                  <h2 className={styles.promo__text}>New Cafe <br/>by<strong> StarBucks</strong></h2>
                  <p>Have time to buy the most harmonious drinks in the<br/>
                      new Starbucks coffee and don't forget about the discount!</p>
                  <div className={styles.promo__btns}>
                      <GreenButton>Select a coffee</GreenButton>
                      <BlackButton>More</BlackButton>
                  </div>
                  <div className={styles.promo__statistic}>
                      <div className={styles.promo__statistic__item}><h4>9k<span>+</span></h4><p>Premium Users</p></div>
                      <div className={styles.promo__statistic__item}><h4>2k<span>+</span></h4><p>Happy Customer</p></div>
                      <div className={styles.promo__statistic__item}><h4>28<span>+</span></h4><p>Awards Winning</p></div>
                  </div>
              </div>
              <img className={styles.promo__img} src="/promo_cup.png" alt="cup"/>
          </section>
      </main>
    )
}
