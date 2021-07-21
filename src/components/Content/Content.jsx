import React from 'react';
import classes from './Content.module.css';
import {Route, withRouter} from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer'
import News from './News/News';
import Music from './Music/Music';
import Login from './Login/Login';
import { connect } from 'react-redux';
import {initializeContent} from './../../redux/contentReducer'
import { compose } from 'redux';
import Preloader from '../common/preloader/Preloader';

class Content extends React.Component { 

  componentDidMount(){
    this.props.initializeContent()
  }

  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
    return(      
      <div className={classes.Content}>
        <Route path='/Profile/:userId?' render={ () => <ProfileContainer/>}/>
        <Route path='/Messages' render={ () => <MessagesContainer/>}/>
        <Route path='/News' render={ () => <News/>}/>
        <Route path='/Music' render={ () => <Music/>}/>
        <Route path='/Users' render={ () => <UsersContainer/>}/>
        <Route path='/Login' render={ () => <Login/>}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.content.initialized
})

export default compose(
withRouter, 
connect (mapStateToProps, {initializeContent}))(Content);