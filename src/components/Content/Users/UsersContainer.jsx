import React from 'react';
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC} from '../../../redux/UsersReducer'
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import preloader from './../../../assets/images/Rhombus.gif'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    
    onPageChanget = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUser(response.data.items);
        })
    }

    render(){  
        return <>
            {this.props.isFetching ? <img src= {preloader} alt='Прелоадер'/> : null}    
            <Users totalUsersCount= {this.props.totalUsersCount} 
                      pageSize= {this.props.pageSize} 
                      currentPage= {this.props.currentPage} 
                      onPageChanget= {this.onPageChanget}
                      users= {this.props.users}
                      unfollow= {this.props.unfollow}
                      follow= {this.props.follow} />
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
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUser: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);