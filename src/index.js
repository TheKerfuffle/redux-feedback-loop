import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const surveyStore = (state = {}, action) => {

    if (action.type === 'SET_FEELING') {
        return {...state, [action.payload.property]: action.payload.value};
    }
    else if (action.type === 'SET_UNDERSTANDING') {
        return {...state, [action.payload.property]: action.payload.value};
    }
    else if (action.type === 'SET_SUPPORTED') {
        return {...state, [action.payload.property]: action.payload.value};
    }
    else if (action.type === 'SET_COMMENTS') {
        return {...state, [action.payload.property]: action.payload.value};
    }
    else if (action.type === 'RESET_SURVEY') {
        return {};
    }

    return state;
}

const storeInstance = createStore(
    // reducers go inside our store - these are specific to our app
    combineReducers({
        surveyStore,
    }
    ),
    // Also, add our middleware for the logger
    applyMiddleware(
        logger
    )

);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
registerServiceWorker();
