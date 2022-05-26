import { useRouter } from "next/router";
import React from 'react';
import styles from "../../styles/finishScreen.module.scss";

const maxScorePage = () => {
    const router = useRouter();
    const { maxScore } = router.query;
    console.log(router.query);

    const handleAgainButtonClick = () => {
        router.push("/")
    }

    return (
        <div className={styles.container}>
            <h1>COUNTRY QUIZ</h1>
            <div className={styles.window}>
                <img
                    className={styles.img}
                    src='/images/winner.svg'
                />
                <p className={styles.heading}>Results</p>
                <p className={styles.subHeading}>You got <span className={styles.maxScore}>{maxScore}</span> correct answers</p>
                <div className={styles.againButtonContainer} onClick={() => handleAgainButtonClick()}>
                    <p className={styles.againButtonText}>Try Again</p>
                </div>
            </div>
        </div>
    )
}

export default maxScorePage;