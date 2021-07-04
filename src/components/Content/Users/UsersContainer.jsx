import React from 'react';
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../../redux/UsersReducer'
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../../common/preloader/Preloader';
import {UsersAPI } from '../../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    
    onPageChanget = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        UsersAPI.getUsers(pageNumber, this.props.pageSize ).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);