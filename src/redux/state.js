import { render } from './../render';

  let state = {
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
}

export let addPost = (messagePost) => {
    let newPost = {id: 5, message: messagePost, name: 'Maks'}
    state.content.profile.posts.postMessage.push(newPost);
    render(state);
}



export default state;