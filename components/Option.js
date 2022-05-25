import { useRouter } from 'next/router'
import React, { useState, useRef } from 'react';

import styles from "../styles/option.module.scss";

export default function Option({ title, optionLetter, allCountries, answer }) {
    const [color, setColor] = useState(0);
    const box = useRef();

    const handleClick = (e) => {
        console.log(box);
        const element = allCountries.find((item) => item.name.official === title);
        if (element.name.official !== answer) {
            box.current.style.backgroundColor = "#EA8282";
        } else {
            box.current.style.backgroundColor = "#60BF88";
        }
    }

    return (
        <div ref={box} className={styles.container} onClick={(e) => handleClick(e)}>
            <p>{optionLetter}</p>
            <p>{title}</p>
        </div>
    )
}