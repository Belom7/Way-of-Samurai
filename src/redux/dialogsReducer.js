const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

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

    newMessageText: '',
}

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        case ADD_DIALOG:
            let message = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, { id: 6, message: message }]
            };
        default:
            return state;
    }
}




export const addMessageActionCreator = () => {
    return { type: ADD_DIALOG }
}
export const onMessageChangeActionCreator = (text) => {
    return { type: UPDATE_MESSAGE_TEXT, newMessageText: text }
}
export default dialogsReducer;