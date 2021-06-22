import * as axios from 'axios';
import React from 'react';
import Classes from './Users.module.css'
import UserImg from '../../../assets/images/user.png'

class User extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUser(response.data.items)
        })
    }
    
    render(){
        return(
            <div>
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