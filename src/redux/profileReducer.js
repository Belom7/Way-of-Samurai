import { UsersAPI, ProfileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

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
    },
    profile: null,
    status: '',
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.addNewPost,
                name: 'Maks'
            };

            return {
                ...state,
                posts: { ...state.posts, postMessage: [...state.posts.postMessage, newPost] },
            }
        }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        case DELETE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts, postMessage: [...state.posts.postMessage].filter(p => p.id !== action.postId)
                }
            }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        default:
            return state;
    }
}

export const addPost = (addNewPost) => { return { type: ADD_POST, addNewPost } }

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await UsersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;