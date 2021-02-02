import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Content/>
      </div>
    </BrowserRouter>
  );
}

export default App;
