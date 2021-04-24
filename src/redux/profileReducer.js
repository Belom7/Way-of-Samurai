import react from 'react'
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initState = {
    profileInfo: [
        {img: ''},
        {f: 'Bagaev'},
        {i: 'Maksim'},
        {o: 'Aleksandrovich'},
        {year: 1991}
    ],
    posts: {
        postMessage: [
            {id: 1, message: 'Воу-воу чувак какая аватарка!', name: 'Юличка'},
            {id: 2, message: 'Раз два три елочка гори!', name: 'Кто то из грота'}
        ],
        newPostText: '',
    },  
}

const profileReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = { 
                id: 5, 
                message: state.posts.newPostText,
                name: 'Maks'
            }
            state.posts.postMessage.push(newPost);
            state.posts.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.posts.newPostText = action.newText;
            return state;
        default:
            return state;
    }  
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const onPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST,newText: text}
}

export default profileReducer;