import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Character from './cardCharacter';

export function Catalogue ({characters, getData,getCharacters}) {

    useEffect (() => {
        
        getData();
    }, [])

    return (
        <div>
            {
                characters.map((character) => (

                    <Character
                    character={character}
                    />
                ) )
            }
        </div>
    )
}

export default connect(
    state => state, 
    actionCreators,
)(Catalogue);