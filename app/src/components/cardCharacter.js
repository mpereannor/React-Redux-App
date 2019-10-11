import React from 'react';

export default function Character ({character}) {

    return (
        <div className= "characterDesign">
            <h1>RICK</h1> 
            <h2>{character.name}</h2>

        </div>
    )
}