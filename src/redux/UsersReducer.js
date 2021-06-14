const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initState = {
    users: [
        { id: 1, img: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg', name: 'Maks', status: 'I good man', location: { country: 'Russia', city: 'Moscow' }, followed: true },
        { id: 2, img: 'https://lh3.googleusercontent.com/proxy/MOr9rRZ7RjpatobBLvbqEXMtWtPY4T5T525IJUCRi1TktwTElRIIwbIGn45S_1SufF3RX0Fv8ZBJu9QKgyRtfH8SGbf7hxxqPidt4YCHN2YSyh_Msesx5Xk', name: 'Yulia', status: 'I good woman', location: { country: 'Russia', city: 'Svetlograd' }, followed: false },
        { id: 3, img: 'https://gagz.ru/wp-content/uploads/2017/06/6-43.jpg', name: 'Galina', status: 'I am mom', location: { country: 'Russia', city: 'Kirov' }, followed: true },
        { id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JAKJ1DWXf8TsTSoQd8mMQSphUkojJNIiSw&usqp=CAU', name: 'Nasty', status: 'I am sister', location: { country: 'Russia', city: 'Moscow' }, followed: false }
    ]
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return { type: FOLLOW, userId }
}
export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}

export default usersReducer;