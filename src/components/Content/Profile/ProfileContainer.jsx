import React from 'react';
import Profile from './Profile'
import {addPost, getUserProfile, getStatus, updateStatus, savePhoto} from '../../../redux/profileReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    
    refrashProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) { userId = this.props.authorizedUserId}
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount(){
        this.refrashProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refrashProfile()
        }
        
    }

    render() {
        return(
            <Profile {...this.props} 
                    isOwner={!this.props.match.params.userId} 
                    profile = {this.props.profile} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus} 
                    savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        status: state.profile.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {addPost, getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
