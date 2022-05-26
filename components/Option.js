import React, { useEffect, useRef } from 'react';

import styles from "../styles/option.module.scss";

export default function Option({ title, optionLetter, allCountries, answer, correctAnswerClick, wrongAnswerClick, isClickable, isNextClicked, setIsNextClicked }) {
    const optionRef = useRef(null)

    useEffect(() => {
        if (isNextClicked) {
            optionRef.current.style.backgroundColor = "white";
            setIsNextClicked(false)
        }
    })

    const handleClick = () => {
        if (isClickable) {
            const element = allCountries.find((item) => item.name.official === title);
            if (element.name.official === answer) {
                optionRef.current.style.backgroundColor = "#60BF88";
                correctAnswerClick(isNextClicked);
            } else {
                optionRef.current.style.backgroundColor = "#EA8282";
                wrongAnswerClick()
                optionRef.current.style.pointerEvenets = isClickable ? "all" : "none";
            }
        }
    }

    return (
        <div
            ref={optionRef}
            className={styles.container}
            onClick={() => handleClick()}
        >
            <p>{optionLetter}</p>
            <p>{title}</p>
        </div>
    )
}