import * as types from './actionTypes';

//design the action creators that will activate the reducers (step 7 deepwood motte)

export function increment () {
    return {type: types.INCREMENT};
}
