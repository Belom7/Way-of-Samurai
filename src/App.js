import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar state={props.state.sidebar}/>
        <Content state={props.state.content} addPost={props.addPost} UpdateNewPost={props.UpdateNewPost}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
