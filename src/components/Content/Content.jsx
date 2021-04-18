import React from 'react';
import classes from './Content.module.css';
import {Route} from 'react-router-dom';
import Messages from './Messages/Dialogs';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';

const Content = (props) => { 
  return(      
    <div className={classes.Content}>
      <Route path='/Profile' render={ () => <Profile state={props.state.profile} dispatch={props.dispatch}/>}/>
      <Route path='/Messages' render={ () => <Messages state={props.state.messages} dispatch={props.dispatch}/>}/>
      <Route path='/News' render={ () => <News/>}/>
      <Route path='/Music' render={ () => <Music/>}/>
    </div>
  )
}

export default Content;