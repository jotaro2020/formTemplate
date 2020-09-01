import React from "react";
import ReactDOM from 'react-dom';
import {Provider }from "react-redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk'
import App from './components/App';
import reducers from './reducers'

const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.querySelector('#root'));