import StartScreen from '../components/StartScreen.js';
import { useState, useEffect } from "react"

const getRandomNumber = (allCountries) => {
  return Math.ceil(Math.random() * 1000) % allCountries.length;
}

export default function Home({ allCountries, randomNumber }) {

  return (
    <StartScreen allCountries={allCountries} number={randomNumber} />
  )
}


export const getServerSideProps = async (context) => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const allCountries = await res.json();
  const randomNumber = getRandomNumber(allCountries);
  return { props: { allCountries, randomNumber } };
};
