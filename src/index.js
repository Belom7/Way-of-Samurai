import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import ReactDOM from 'react-dom';
import {addPost, UpdateNewPost} from './redux/state';

let render =(state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} UpdateNewPost={UpdateNewPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render(state);
subscribe(render);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
