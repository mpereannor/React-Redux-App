import React from 'react';
import {combineReducers, createStore} from 'redux';
import * as reducers from './state/reducers';
import Counter from './components/Counter';
import './App.css';


//combine All reducers into one monsterReducer (4 dreadfort)

const megaReducer = combineReducers({
  count: reducers.countReducer
});


//use createStore to create a Redux Store 
export const countStore = createStore(
  megaReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function App() {
  return (
    <div className="App">
      deadcrush
      <Counter/>
    </div>
  );
}

export default App;
