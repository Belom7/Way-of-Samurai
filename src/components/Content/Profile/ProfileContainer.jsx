import React from 'react';
import Profile from './Profile'
import {addPost, getUserProfile, onPostChange, getStatus, updateStatus} from '../../../redux/profileReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        console.log(this.props)
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 18086}
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return(
            <Profile {...this.props} profile = {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        status: state.profile.status
    }
}

export default compose(
    connect(mapStateToProps, {addPost, onPostChange, getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
