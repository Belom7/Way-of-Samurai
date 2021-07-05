import React from 'react';
import Profile from './Profile'
import {addPost, getUserProfile, onPostChange} from '../../../redux/profileReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 2}
        this.props.getUserProfile(userId)
    }

    render() {
        return(
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {addPost, onPostChange, getUserProfile})(WithUrlDataContainerComponent);