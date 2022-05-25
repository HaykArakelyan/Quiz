import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';

import styles from "../styles/startscreen.module.scss";
import Option from './Option';


export default function StartScreen({ allCountries }) {
    const [index, setIndex] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    const [isVisiable, setIsVisiable] = useState(false);
    const [options, setOptions] = useState(["B.", "C.", "D."])


    const getRandomNumber = () => {
        return Math.ceil(Math.random() * 1000) % allCountries.length;
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.window}>
                    <div className={styles.heading}>
                        <h1>COUNTRY QUIZ</h1>
                        <h1></h1>
                    </div>
                    <div className={styles.quizWindow}>
                        <img
                            className={styles.logo}
                            src="/images/logo.svg"
                        />
                        <div className={styles.question}>
                            <p>{allCountries[index].capital} is the capital of</p>
                        </div>
                        <div className={styles.options} >
                            <Option
                                key={allCountries[index].name.official}
                                title={allCountries[index].name.official}
                                optionLetter={"A."}
                                allCountries={allCountries}
                                answer={allCountries[index].name.official}
                            />
                            {options.map((item) => {
                                getRandomNumber()
                                return (
                                    <Option
                                        key={item}
                                        title={allCountries[getRandomNumber()].name.official}
                                        optionLetter={item}
                                        allCountries={allCountries}
                                        answer={allCountries[index].name.official}
                                    />
                                )
                            }
                            )}
                        </div>
                        <div className={styles.nextButtonContainer}>
                            <div style={{ display: isVisiable }} className={styles.nextButton}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
