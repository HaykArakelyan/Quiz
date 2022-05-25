import StartScreen from '../components/StartScreen.js';
import { useState, useEffect } from "react"

export default function Home({ allCountries }) {

  return (
    <StartScreen allCountries={allCountries} />
  )
}


export const getServerSideProps = async (context) => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const allCountries = await res.json();
  return { props: { allCountries } };
};
