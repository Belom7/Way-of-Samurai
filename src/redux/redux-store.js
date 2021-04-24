import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogsReducer,
});

let store = createStore(reducers);

export default store;