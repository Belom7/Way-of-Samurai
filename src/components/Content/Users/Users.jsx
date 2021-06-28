import * as axios from 'axios';
import React from 'react';
import Classes from './Users.module.css'
import UserImg from '../../../assets/images/user.png'

class User extends React.Component {

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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i=1; i<= pagesCount; i++) {
            pages.push(i)
        }

        return(
            <div>
                <div>
                    {pages.map(p => {
                        return<span className={this.props.currentPage === p && Classes.selectPage} onClick={(e)=> {this.onPageChanget(p)}}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map( u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={ u.photos.small != null ? u.photos.small : UserImg} className={Classes.photo} alt='Аватарка'/>
                            </div>
                            <div>
                                {u.followed ? <button onClick ={() => {this.props.unfollow(u.id)}}>Follow</button> 
                                : <button onClick ={() => {this.props.follow(u.id)}}>Unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        {/* <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.sity}</div>
                        </span> */}
                    </div>)
                }
            </div>
        )
    }
}

export default User;