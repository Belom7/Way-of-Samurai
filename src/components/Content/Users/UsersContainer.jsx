import React from 'react';
import {follow, unfollow, setCurrentPage, getUsersThunkCreator} from '../../../redux/usersReducer'
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../common/preloader/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        }
    
    onPageChanget = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render(){  
        return <>
            {this.props.isFetching ? <Preloader/> : null}    
            <Users totalUsersCount= {this.props.totalUsersCount} 
                      pageSize= {this.props.pageSize} 
                      currentPage= {this.props.currentPage} 
                      onPageChanget= {this.onPageChanget}
                      users= {this.props.users}
                      unfollow= {this.props.unfollow}
                      follow= {this.props.follow}
                      followingInProgress= {this.props.followingInProgress} />
                </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, getUsersThunkCreator})
)(UsersContainer)