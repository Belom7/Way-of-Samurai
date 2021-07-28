import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import contentReducer from './contentReducer';

let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    content: contentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleare)));

window.__store__ = store;

export default store;