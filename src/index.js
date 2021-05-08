import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const surveyStore = (state = {}, action) => {

    // All dispatches will set a new property in the same way,
    // so we only need one path for that.
    if (action.type === 'SET_PROPERTY') {
        return {...state, [action.payload.property]: action.payload.value};
    }
    // Resets the survey to being empty
    else if (action.type === 'RESET_SURVEY') {
        return {};
    }

    return state;
}

const storeInstance = createStore(
    // I included combineReducers because i'd rather set up the code 
    // to be able to handle added reducers before I add them.
    combineReducers({
        surveyStore,
    }
    ),

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
