import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    data:[ 1, 2 ,3 ],
    selected: 1,
}
function reducer (state = {}, action ){
    console.log(action)
    return state
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render( 
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root')
    );


serviceWorker.unregister();
