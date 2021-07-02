import React from 'react';
import classes from './Content.module.css';
import {Route} from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer'
import News from './News/News';
import Music from './Music/Music';

const Content = (props) => { 
  return(      
    <div className={classes.Content}>
      <Route path='/Profile/:userId?' render={ () => <ProfileContainer/>}/>
      <Route path='/Messages' render={ () => <MessagesContainer/>}/>
      <Route path='/News' render={ () => <News/>}/>
      <Route path='/Music' render={ () => <Music/>}/>
      <Route path='/Users' render={ () => <UsersContainer/>}/>
    </div>
  )
}

export default Content;