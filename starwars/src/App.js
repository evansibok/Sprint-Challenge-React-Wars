import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsList from './components/CardsList'
import './App.css';


const castApi = "https://swapi.co/api/people/";

const StarWarsCast = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(castApi)
      .then(response => setCharacter(response.data.results))
      .catch(error => {
        // debugger
        return error;
      })
  }, []);



  return (
    <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardsList character={character} />
    </div>
  )
}

export default StarWarsCast;
