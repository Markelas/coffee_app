import React from 'react';
import styles from "@/app/page.module.css";

const PromoTextGreenCircle = () => {
    return (
        <svg className={styles.promo__text__circle} width="1651" height="1014" viewBox="0 0 1651 1014" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_6_42)">
                <circle cx="1046.5" cy="360.5" r="114.5" fill="#D9D9D9" fillOpacity="0.3"></circle>
            </g>
            <g filter="url(#filter1_f_6_42)">
                <circle cx="1313" cy="676" r="162" fill="url(#paint0_linear_6_42)"/>
            </g>
            <g filter="url(#filter2_f_6_42)">
                <circle cx="338" cy="338" r="162" fill="url(#paint1_linear_6_42)" fillOpacity="0.2"/>
            </g>
            <defs>
                <filter id="filter0_f_6_42" x="807.958" y="121.958" width="477.083" height="477.083"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="62.0208" result="effect1_foregroundBlur_6_42"/>
                </filter>
                <filter id="filter1_f_6_42" x="975.5" y="338.5" width="675" height="675" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="87.75" result="effect1_foregroundBlur_6_42"/>
                </filter>
                <filter id="filter2_f_6_42" x="0.5" y="0.5" width="675" height="675" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="87.75" result="effect1_foregroundBlur_6_42"/>
                </filter>
                <linearGradient id="paint0_linear_6_42" x1="1475" y1="725.919" x2="1228.64" y2="737.962"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#237249" stopOpacity="0.55"/>
                    <stop offset="0.518493" stopColor="#35C66B" stopOpacity="0.73"/>
                </linearGradient>
                <linearGradient id="paint1_linear_6_42" x1="500" y1="387.919" x2="253.638" y2="399.962"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#237249" stopOpacity="0.55"/>
                    <stop offset="0.518493" stopColor="#35C66B" stopOpacity="0.73"/>
                </linearGradient>
            </defs>
        </svg>

    );
};

export default PromoTextGreenCircle;
