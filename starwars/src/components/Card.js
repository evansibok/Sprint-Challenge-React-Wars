import React from 'react';
import styled from 'styled-components';
import './StarWars.css';

// Card Style

const CardCon = styled.div`
    max-width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 0.6rem;
    border-radius: 2em;
    background: rgba(255, 255, 255, 0.8);
    padding: 1em;
    margin: 2.5em;
`;

const Section = styled.section`
    display: flex;
    justify-content: space-around;
`;

const StyledH1 = styled.h1`
    font-size: 1rem;
`;

const StyledH4 = styled.h4`

    span {
        font-weight: 300;
    }
`;

function Card({ name, gender, birthYear, height, mass, created }) {
    
    return (
        <div>
            {
                <CardCon>
                    <StyledH1>{name}</StyledH1>
                    <Section>
                        <StyledH4><span>Gender</span><br /><br />{gender}</StyledH4>
                        <StyledH4><span>Birth Year</span><br /><br />{birthYear}</StyledH4>
                    </Section>
                    <Section>
                        <StyledH4><span>Height</span><br /><br />{height}</StyledH4>
                        <StyledH4><span>Mass</span><br /><br />{mass}</StyledH4>
                    </Section>
                    <StyledH4><span>Created</span><br />{created}</StyledH4>
                </CardCon>
            }
        </div>
    )

}


export default Card;