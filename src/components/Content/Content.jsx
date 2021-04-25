import React from 'react';
import classes from './Content.module.css';
import {Route} from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
import News from './News/News';
import Music from './Music/Music';

const Content = (props) => { 
  return(      
    <div className={classes.Content}>
      <Route path='/Profile' render={ () => <ProfileContainer store={props.store}/>}/>
      <Route path='/Messages' render={ () => <MessagesContainer store={props.store} />}/>
      <Route path='/News' render={ () => <News/>}/>
      <Route path='/Music' render={ () => <Music/>}/>
    </div>
  )
}

export default Content;