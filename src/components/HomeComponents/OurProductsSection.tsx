import React from 'react';
import styles from "@/app/page.module.css"
import TheSwiper from "@/components/swiper/TheSwiper";
import {ICoffeeData} from './types/dataCoffeTypes'

const data:ICoffeeData[] = [
    {
        id: 1,
        imgUrl: '/img/HomePage/carousel/carousel_fast_brown.png',
        title: 'Latte',
        desr: 'With salted Caramel',
        price: '7,10$',
        volume: '300ml'
    },
    {
        id: 2,
        imgUrl: '/img/HomePage/carousel/carousel_fast.png',
        title: 'Espresso',
        desr: 'With gingerbread flavor',
        price: '7,10$',
        volume: '300ml'
    },
    {
        id: 3,
        imgUrl: '/img/HomePage/carousel/carousel_cappuccino.png',
        title: 'Cappuccino',
        desr: 'With nutmeg and chocolate',
        price: '7,10$',
        volume: '300ml'
    },
    {
        id: 4,
        imgUrl: '/img/HomePage/carousel/carousel_fast_brown.png',
        title: 'Latte',
        desr: 'With salted Caramel',
        price: '7,10$',
        volume: '300ml'
    },
    {
        id: 5,
        imgUrl: '/img/HomePage/carousel/carousel_fast.png',
        title: 'Espresso',
        desr: 'With gingerbread flavor',
        price: '7,10$',
        volume: '300ml'
    },
    {
        id: 6,
        imgUrl: '/img/HomePage/carousel/carousel_cappuccino.png',
        title: 'Cappuccino',
        desr: 'With nutmeg and chocolate',
        price: '7,10$',
        volume: '300ml'
    },
]
const OurProductsSection = () => {
    return (
        <section className={styles.ourProducts}>
            <div className={styles.ourProducts__head}>
                <h2>New Our<br/><strong>Products</strong></h2>
                <p>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
            </div>
            <TheSwiper data={data}/>
        </section>
    );
};

export default OurProductsSection;
