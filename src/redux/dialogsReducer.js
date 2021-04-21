const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        case ADD_DIALOG:
            let message = state.newMessageText;
            state.newMessageText = '';
            state.messageData.push({id:6, message: message});
            return state;
        default:
            return state;
    }

    // if (action.type === UPDATE_MESSAGE_TEXT) {
    //     state.newMessageText = action.newMessageText;
    // } else if (action.type === ADD_DIALOG) {
    //     let message = state.newMessageText;
    //     state.newMessageText = '';
    //     state.messageData.push({id:6, message: message});
    // }

    // return state;

}