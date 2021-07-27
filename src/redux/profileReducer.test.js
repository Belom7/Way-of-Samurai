import profileReducer, { addPost, deletePost } from "./profileReducer";
//готовим исходные данные (стейт)
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
    }
}

test('adding a new post', () => {
    //готовим экшен который будем диспатчить
    let action = addPost('baga')
    let newState = profileReducer(initState, action)
    //expectation
    expect(newState.posts.postMessage.length).toBe(3)
})

test('message of new post should be correct', () => {
    let action = addPost('baga')
    let newState = profileReducer(initState, action)

    expect(newState.posts.postMessage[2].message).toBe('baga')
})
test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(initState, action)

    expect(newState.posts.postMessage.length).toBe(1)
})
