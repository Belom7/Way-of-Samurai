import { UsersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initState = {
    profileInfo: [
        { img: '' },
        { f: 'Bagaev' },
        { i: 'Maksim' },
        { o: 'Aleksandrovich' },
        { year: 1991 }
    ],
    posts: {
        postMessage: [
            { id: 1, message: 'Воу-воу чувак какая аватарка!', name: 'Юличка' },
            { id: 2, message: 'Раз два три елочка гори!', name: 'Кто то из грота' }
        ],
        newPostText: '',
    },
    profile: null,
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.posts.newPostText,
                name: 'Maks'
            };

            return {
                ...state,
                posts: { ...state.posts, postMessage: [...state.posts.postMessage, newPost] },
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST:
            let newPostText = action.newText
            return {
                ...state,
                posts: { ...state.posts, newPostText }
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state;
    }
}

export const addPost = () => {
    return { type: ADD_POST }
}
export const onPostChange = (text) => {
    return { type: UPDATE_NEW_POST, newText: text }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {

    UsersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export default profileReducer;