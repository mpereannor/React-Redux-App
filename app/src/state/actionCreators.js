import axios from 'axios';

import * as types from './actionTypes';

//design the action creators that will activate the reducers (step 7 deepwood motte)

const characterApi = `https://rickandmortyapi.com/api/character
`;

export function increment () {
    return {type: types.INCREMENT};
}

export function getCharacters (characters) {
    return{
        type: types.ADD_CHARACTERS,
        payload: characters,
    }
}

export const getData = () =>
dispatch => {
    const characterPromise = axios.get(characterApi);
    
    characterPromise
    .then(response => {
    
        const characters = response.data.results;
        console.log('ddldld', characters);
    })
    .catch(error =>{
        console.log('pickle')
    });

    dispatch(getCharacters (characters));
}