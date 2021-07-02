import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './UsersReducer';

let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;