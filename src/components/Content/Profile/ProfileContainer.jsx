import React from 'react';
import Profile from './Profile'
import {addPost, getUserProfile, onPostChange} from '../../../redux/profileReducer'
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2}
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/Login'}/>
        return(
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {addPost, onPostChange, getUserProfile})(WithUrlDataContainerComponent);