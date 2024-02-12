import React from 'react';
import styles from "./Buttons.module.css"
// @ts-ignore
const GreenButton = ({children}) => {
    return (
        <button className={styles.black__btn}>{children}</button>
    );
};

export default GreenButton;
