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
        if (action.type === 'ADD-POST') {
            let newPost = { 
                id: 5, 
                message: this._state.content.profile.posts.newPostText,
                name: 'Maks'}
            this._state.content.profile.posts.postMessage.push(newPost);
            this._state.content.profile.posts.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.content.profile.posts.newPostText = action.text;
        this._callSubscriber(this._state);
        }
    }
}

export default store;