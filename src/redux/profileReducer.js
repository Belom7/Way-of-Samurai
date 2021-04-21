const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export const profileReducer = (state, action) => {
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
        



    // if (action.type === ADD_POST) {
    //     let newPost = { 
    //         id: 5, 
    //         message: state.newPostText,
    //         name: 'Maks'}
    //         state.posts.postMessage.push(newPost);
    //         state.posts.newPostText = '';
    // } else if (action.type === UPDATE_NEW_POST) {
    //     state.newPostText = action.newText;
    // }

    // return state;
    
}