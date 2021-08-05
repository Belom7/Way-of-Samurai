import React from 'react';
import classes from './Content.module.css';
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from './Users/UsersContainer'
import { connect } from 'react-redux';
import {initializeContent} from './../../redux/contentReducer'
import { compose } from 'redux';
import Preloader from '../common/preloader/Preloader';

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const News = React.lazy(() => import('./News/News'));
const Music = React.lazy(() => import('./Music/Music'));
const Login = React.lazy(() => import('./Login/Login'));
const MessagesContainer = React.lazy(() => import('./Messages/MessagesContainer'));

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
        <React.Suspense fallback={<Preloader/>}>
          <Route path='/Profile/:userId?' render={ () => <ProfileContainer/>}/>
          <Route path='/Messages' render={ () => <MessagesContainer/>}/>
          <Route path='/News' render={ () => <News/>}/>
          <Route path='/Music' render={ () => <Music/>}/>
          <Route path='/Users' render={ () => <UsersContainer/>}/>
          <Route path='/Login' render={ () => <Login/>}/>
        </React.Suspense>
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