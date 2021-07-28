import { getAuthUserData } from './authReducer'

const INITIALIZED_SUCCESS = 'connect/INITIALIZED_SUCCESS';

let initState = {
    initialized: false,
}

const contentReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return { type: INITIALIZED_SUCCESS }
}

export const initializeContent = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    //dispatch(4e to ewe())
    //dispatch(i tut 4e to ewe())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })

}

export default contentReducer;