import React from 'react'
import Classes from './Users.module.css'
import UserImg from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import Paginator from './Paginator'



const Users = (props) => {
    return(
        <div>
            <Paginator totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize} 
                        currentPage = {props.currentPage}
                        onPageChanget = {props.onPageChanget}
            />
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
                            ? <button disabled={props.followingInProgress.some(id=> id=== u.id)} onClick ={() => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button disabled={props.followingInProgress.some(id=> id=== u.id)} onClick ={() => {props.follow(u.id)}}>Follow</button>}
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