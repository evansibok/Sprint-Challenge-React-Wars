import React from 'react';
import Card from './Card'

function CardsList({ character }) {

    return (
        <div>
            {character.map((character, index) => (
                    <Card key={index}
                        name={character.name}
                        gender={character.gender}
                        height={character.height}
                        mass={character.mass}
                        created={character.created}
                        birthYear={character.birth_year}
                    />
                ))
            }
        </div>
    )
}

export default CardsList;