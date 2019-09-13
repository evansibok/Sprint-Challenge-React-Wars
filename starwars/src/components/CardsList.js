import React from 'react';
import Card from './Card';
import styled from 'styled-components';

// Styling

const ParentCon = styled.div`
    background: rgba(237, 48, 19, 0.4);
    margin: 0 auto;
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 2em;

`;

function CardsList({ character }) {

    return (
        <ParentCon>
            {character.map((ele, index) => (
                    <Card key={index}
                        name={ele.name}
                        gender={ele.gender}
                        height={ele.height}
                        mass={ele.mass}
                        created={ele.created}
                        birthYear={ele.birth_year}
                    />
                ))
            }
        </ParentCon>
    )
}

export default CardsList;