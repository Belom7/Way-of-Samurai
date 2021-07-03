import React from 'react';
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content'

const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
