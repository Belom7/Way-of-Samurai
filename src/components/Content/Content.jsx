import React from 'react';
import classes from './Content.module.css';
import {Route} from 'react-router-dom';
import Messages from './Messages/Dialogs';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';

function Content() {
    return(      
        <div className={classes.Content}>
          <Route path='/Profile' component={Profile}/>
          <Route path='/Messages' component={Messages}/>
          <Route path='/News' component={News}/>
          <Route path='/Music' component={Music}/>
          {/* <Route path='/Settings' component={Settings}/> */}
        </div>
    )
}

export default Content;