const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


let store = {
    _state : {
        header: {
            logo: [
    
            ]
        },
    
        sidebar: {
            navbar: [
                {id: 1, name: 'Profile'},
                {id: 2, name: 'Messages'},
                {id: 3, name: 'News'},
                {id: 4, name: 'Music'},
                {id: 5, name: 'Settings'},
            ],
            blockFriends: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Egor' },
    
            ]
        },
    
        content: {
            profile: {
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
            },
            messages: {
                dialogsData: [
                    {id: 1, name: 'Maks'},
                    {id: 2, name: 'Evgen'},
                    {id: 3, name: 'Andrey'},
                    {id: 4, name: 'Ivan'},
                    {id: 5, name: 'Egor'},
                ],
            
                messageData: [
                    {id: 1, message: 'Привет!'},
                    {id: 2, message: 'Погнали гулять!?'},
                    {id: 3, message: 'Чего делаешь?'},
                    {id: 4, message: 'ЭЭЭ ау'},
                    {id: 5, message: 'гГ'},
                ],

                newMessageText: '',
            },
        },
    },
    _callSubscriber () {
        console.log('render on')
    },


    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = { 
                id: 5, 
                message: this._state.content.profile.posts.newPostText,
                name: 'Maks'}
            this._state.content.profile.posts.postMessage.push(newPost);
            this._state.content.profile.posts.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.content.profile.posts.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.content.messages.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_DIALOG) {
            let message = this._state.content.messages.newMessageText;
            this._state.content.messages.newMessageText = '';
            this._state.content.messages.messageData.push({id:6, message: message});
            this._callSubscriber(this._state);
        }
    }
    
}

export const addPostActionCreator = () => {
    return { 
        type: ADD_POST 
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text,
    }
}
export const addMessageActionCreator = () => {
    return { 
        type: ADD_DIALOG 
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessageText: text,
    }
}


export default store;