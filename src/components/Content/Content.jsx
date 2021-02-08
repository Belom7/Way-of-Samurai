import React from 'react';
import classes from './Content.module.css';
import {Route} from 'react-router-dom';
import Messages from './Messages/Dialogs';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';

function Content(props) {  
  return(      
    <div className={classes.Content}>
      <Route path='/Profile' render={ () => <Profile pi={props.pi} pM={props.pM}/>}/>
      <Route path='/Messages' render={ () => <Messages d={props.d} m={props.m}/>}/>
      <Route path='/News' render={ () => <News/>}/>
      <Route path='/Music' render={ () => <Music/>}/>
    </div>
  )
}

export default Content;