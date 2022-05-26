import StartScreen from '../components/StartScreen.js';
import { useState, useEffect } from "react"


const getRandomNumbers = (allCountries, currentIndex) => {
  const randoms = [];
  while (true) {
    if (randoms.length === 3) {
      return randoms
    }
    const num = Math.ceil(Math.random() * 1000) % allCountries.length;
    if (!randoms.includes(num) || currentIndex !== num) {
      randoms.push(num);
    }
  }
}


const getFinalOptions = (allCountries, currentIndex) => {
  const arr = [allCountries[currentIndex]];
  while (true) {
    if (arr.length === 4) {
      return arr.sort((a, b) => 0.5 - Math.random());
    }

    const num = Math.ceil(Math.random() * 1000) % allCountries.length;
    arr.push(allCountries[num]);
  }
}

export default function Home({ allCountries, randoms, finalOptions }) {
  const getNewRandoms = (currentIndex) => {
    return getRandomNumbers(allCountries, currentIndex);
  }
  const getNewFinalOptions = (currentIndex) => {
    return getFinalOptions(allCountries, currentIndex)
  }

  return (
    <StartScreen
      allCountries={allCountries}
      randoms={randoms}
      getNewRandoms={() => getNewRandoms()}
      finalOptions={finalOptions}
      getNewFinalOptions={(getNewRandoms) => getNewFinalOptions(getNewRandoms)}
    />
  )
}


export const getServerSideProps = async (context) => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const allCountries = await res.json();
  const randoms = getRandomNumbers(allCountries);
  const finalOptions = getFinalOptions(allCountries, 0);
  return { props: { allCountries, randoms, finalOptions } };
};
