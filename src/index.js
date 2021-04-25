import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

let render = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>, document.getElementById('root')
  );
}

render(store.getState());

store.subscribe(() => {
  let state = store.getState();
  render(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
