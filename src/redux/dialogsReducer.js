const ADD_DIALOG = 'ADD-DIALOG';

let initState = {
    dialogsData: [
        { id: 1, name: 'Maks' },
        { id: 2, name: 'Evgen' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Ivan' },
        { id: 5, name: 'Egor' },
    ],

    messageData: [
        { id: 1, message: 'Привет!' },
        { id: 2, message: 'Погнали гулять!?' },
        { id: 3, message: 'Чего делаешь?' },
        { id: 4, message: 'ЭЭЭ ау' },
        { id: 5, message: 'гГ' },
    ],
}

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            let message = action.newMessageText;
            return {
                ...state,
                messageData: [...state.messageData, { id: 6, message: message }]
            };
        default:
            return state;
    }
}




export const addMessageActionCreator = (newMessageText) => {
    return { type: ADD_DIALOG, newMessageText }
}

export default dialogsReducer;