import React from 'react';
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from '../../../redux/UsersReducer'
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    
    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
        })
    }

    render(){
        

        return <Users totalUsersCount= {this.props.totalUsersCount} 
                      pageSize= {this.props.pageSize} 
                      currentPage= {this.props.currentPage} 
                      onPageChanget= {this.onPageChanget}
                      users= {this.props.users}
                      unfollow= {this.props.unfollow}
                      follow= {this.props.follow} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);