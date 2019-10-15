import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App, {countStore}  from './App';

ReactDOM.render(
// inject the Redux Store into the app using a Provider (6 winterfell)
    <Provider store={countStore}>
        <App />
    </Provider>
, document.getElementById('root'));
