import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/state'



const Profile = (props) => {
    let profileInfo = props.state.profileInfo.map (info => <ProfileInfo i={info.i} f={info.f} o={info.o} year={info.year} img={info.img}/>)

    let area = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = area.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    };
    
    return(
        <div className={Classes.profile}>
            <div><img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
            </div>
            {profileInfo}
            <div>
                <textarea onChange={onPostChange} ref={area} value={props.state.newPostText}/>
                <button onClick={addPost}>add post</button>
            </div>
            <Posts state={props.state.posts}/>
        </div>
    )
}

export default Profile;