import React from 'react'
import Classes from './Users.module.css'
import UserImg from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for(let i=1; i<= pagesCount; i++) {
            pages.push(i)
        }
    return(
        <div>
            <div>
                {pages.map(p => {
                    return<span className={props.currentPage === p && Classes.selectPage} onClick={(e)=> {props.onPageChanget(p)}}>{p}</span>
                })}
            </div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                                <img src={ u.photos.small != null ? u.photos.small : UserImg} className={Classes.photo} alt='Аватарка'/>
                            </NavLink> 
                        </div>
                        <div>
                            {u.followed 
                            ? <button disabled={props.followingInProgress.some(id=> id=== u.id)} onClick ={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {
                                    'API-KEY' : 'cf3acb22-7083-4709-a6ea-43f066c0aa35'
                                }})
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })
                            }}>Unfollow</button> 
                            : <button disabled={props.followingInProgress.some(id=> id=== u.id)} onClick ={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {
                                    'API-KEY' : 'cf3acb22-7083-4709-a6ea-43f066c0aa35'
                                }})
                                    .then(response => {
                                        if(response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })
                            }}>Follow</button>}
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

export default Users;