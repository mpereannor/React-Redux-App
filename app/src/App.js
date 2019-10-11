import React from 'react';
import thunk from 'redux-thunk';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import * as reducers from './state/reducers';
import Counter from './components/Counter';
import Catalogue from './components/cardCatalogue';
import './App.css';


//combine All reducers into one monsterReducer (4 dreadfort)

const megaReducer = combineReducers({
  count: reducers.countReducer,
  addCharacter: reducers.characterReducer
});


//use createStore to create a Redux Store (t white harbour)
export const countStore = createStore(
  megaReducer,
  {},
  compose(

    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )    
);


function App() {
  return (
    <div className="App">
      deadcrush
      <Counter/>
      <Catalogue/>
    </div>
  );
}

export default App;
