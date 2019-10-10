import * as types from './actionTypes';

// design the state of the apps - what slices (1 castleblack)

const initialValueCount = 0;

//create one reducer function per slice of state (3 last hearth)
export function countReducer (state= initialValueCount, action){
    switch(action.type) {
        case types.INCREMENT:
            return state + 2;

        default: 
        return state;
    }
}