import React from 'react';
import styled from 'styled-components';
import './StarWars.css';

// Card Style
const CardCon = styled.div`
    border: 2px solid #466;
    max-width: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
`;

const Section = styled.section`
    display: flex;
    justify-content: space-around;
`;

function Card({ name, gender, birthYear, height, mass, created }) {
    
    return (
        <div>
            <CardCon>
                <h1>{name}</h1>
                <Section>
                    <h4>Gender: {gender}</h4>
                    <h4>Birth Year: {birthYear}</h4>
                </Section>
                <Section>
                    <h4>Height: {height}</h4>
                    <h4>Mass: {mass}</h4>
                </Section>
                <h5>Created: {created}</h5>
            </CardCon>
        </div>
    )
}


export default Card;