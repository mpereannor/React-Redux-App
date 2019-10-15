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
    const characterAxios = axios.get(characterApi);
    
    characterAxios
    .then(response => {
        debugger;
        const characters = response.data.results;
        console.log('ddldld', characters);
        dispatch(getCharacters (characters));
    })
}
    // .catch(error =>{
    //     console.log('pickle', error)
    // });
