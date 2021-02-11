import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    let profileInfo = props.state.profileInfo.map (info => <ProfileInfo i={info.i} f={info.f} o={info.o} year={info.year} img={info.img}/>)

    let area = React.createRef();
    let click = () => {
         let text = area.current.value;
        props.addPost(text)};
    
    return(
        <div className={Classes.profile}>
            <div><img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
            </div>
            {profileInfo}
            <div>
                <textarea ref={area} ></textarea>
                <button onClick={click}>add post</button>
            </div>
            <Posts state={props.state.posts}/>
        </div>
    )
}

export default Profile;