import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';


const castApi = "https://swapi.co/api/people/";

axios.get(castApi)
  .then()
  .catch()

const StarWarsCast = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(castApi)
      .then(response => {
        debugger
        const peopleList = response.data.results;
        peopleList.map(ele => {
          debugger
          return setCharacter(ele)
        })
      })
      .catch(error => {
        debugger
        return error
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card 
      name={character.name}
      gender={character.gender}
      birthYear={character.birth_year}
      height={character.height}
      mass={character.mass}
      created={character.created}
      />
    </div>
  );
}

export default StarWarsCast;
