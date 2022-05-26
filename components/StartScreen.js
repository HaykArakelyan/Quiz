import { useRouter } from 'next/router';
import React, { useState } from 'react';

import styles from "../styles/startscreen.module.scss";
import Option from './Option';


export default function StartScreen({ allCountries, finalOptions, getNewFinalOptions }) {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [randomOptions, setRandomOptions] = useState(finalOptions)
    const [isClickable, setIsClickable] = useState(true)
    const optionLetters = ["A", "B", "C", "D"];

    const [isNextClicked, setIsNextClicked] = useState(false)

    const router = useRouter()

    const getNextButtonVisibility = () => {
        if (isVisible) {
            return "visible";
        } else {
            return "hidden";
        }
    }

    const handleCorrectAnswerClick = (isClicked) => {
        setIsVisible(true);
        setIsClickable(false);
        return !isClicked;
    }

    const handleWrongAnswerClick = () => {
        setIsVisible(true);
        setIsClickable(false);
        setIsQuizFinished(true);
    }

    const handleNextButtonClick = (maxScore) => {
        if (isQuizFinished) {
            router.push(`/finishScreen/${maxScore}`)
            return;
        }
        setIsNextClicked(!isNextClicked)
        setIsClickable(true)
        setIndex(index + 1);
        setRandomOptions(getNewFinalOptions(index + 1));
        setIsVisible(!isVisible);
    }


    return (
        <>
            <div className={styles.container}>
                <div className={styles.window}>
                    <div className={styles.heading}>
                        <h1>COUNTRY QUIZ</h1>
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

                            {optionLetters.map((item, i) =>
                                <Option
                                    key={i}
                                    title={randomOptions[i].name.official}
                                    optionLetter={item}
                                    answer={allCountries[index].name.official}
                                    correctAnswerClick={() => handleCorrectAnswerClick()}
                                    wrongAnswerClick={() => handleWrongAnswerClick()}
                                    allCountries={allCountries}
                                    isClickable={isClickable}
                                    isNextClicked={isNextClicked}
                                    setIsNextClicked={() => setIsNextClicked()}
                                />
                            )}
                        </div>
                        <div
                            style={{ visibility: getNextButtonVisibility() }}
                            className={styles.nextButtonContainer}
                            onClick={() => handleNextButtonClick(index)}
                        >
                            <div className={styles.nextButton}>
                                <p>Next</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
