import React from 'react';
import {connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

//plug the action creators into the components via props
export function Counter(props) {

    const {count, increment} = props

    return (
        <div className='testComponent'>
            le compte est {count}
            <button onClick={increment}>INCREASE</button>
        </div>
    )
}

//export a connected version of a component (8 bear island)
export default connect (
    state => state,
    actionCreators,
)(Counter);