import Dialogs from './Dialogs'
import {addMessageActionCreator,onMessageChangeActionCreator} from './../../../redux/dialogsReducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        state: state.messages,
        isAuth: state.auth.isAuth
    
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default MessagesContainer;