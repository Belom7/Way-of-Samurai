import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import ReactDOM from 'react-dom';

let render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} UpdateNewPost={store.UpdateNewPost.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render(store.getState());
store.subscribe(render);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
