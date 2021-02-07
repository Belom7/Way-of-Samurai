import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Content d={props.d} m={props.m} pi={props.pi} pM={props.pM}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
