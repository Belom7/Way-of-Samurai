import React from 'react';
import axios from 'axios';
import Profile from './Profile'
import {addPost, onPostChange, setUserProfile} from '../../../redux/profileReducer'
import { connect } from 'react-redux';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
                
        })
    }

    render() {
        return(
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

export default connect(mapStateToProps, {addPost, onPostChange, setUserProfile})(ProfileContainer);