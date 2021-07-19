import { stopSubmit } from "redux-form";
import { autchAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => {
    return { type: SET_USER_DATA, payload: { id, email, login, isAuth } }
}

export const getAuthUserData = () => (dispatch) => {

    autchAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {


    autchAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('Login', { _error: message }))
        }
    })
}

export const logout = () => (dispatch) => {

    autchAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer;