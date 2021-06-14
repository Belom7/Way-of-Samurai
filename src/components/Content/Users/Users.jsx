import React from 'react';
import Classes from './Users.module.css'

const Users = (props) => {
    return(
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.img} className={Classes.photo}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick ={() => {props.unfollow(u.id)}}>Follow</button> 
                            : <button onClick ={() => {props.follow(u.id)}}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.sity}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;