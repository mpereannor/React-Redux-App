import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Character from './cardCharacter';

export function Catalogue ({getCharacters}) {

    useEffect (() => {
        
        getCharacters();
    }, [])

    return (
        <div className ='catalogueDesign'>
            {}
            <Character/>
        </div>
    )
}

export default connect(
    state => state, 
    actionCreators,
)(Catalogue);