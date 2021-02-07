import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Maks'},
  {id: 2, name: 'Evgen'},
  {id: 3, name: 'Andrey'},
  {id: 4, name: 'Ivan'},
  {id: 5, name: 'Egor'}
]
let messageData = [
  {id: 1, message: 'Привет!'},
  {id: 2, message: 'Погнали гулять!?'},
  {id: 3, message: 'Чего делаешь?'},
  {id: 4, message: 'ЭЭЭ ау'},
  {id: 5, message: 'гГ'},
]

let profileInfo = [
  {f: 'Bagaev'},
  {i: 'Maksim'},
  {o: 'Aleksandrovich'},
  {year: 1991}
]

let postMessage = [
  {id: 1, message: 'Воу-воу чувак какая аватарка!', name: 'Юличка'},
  {id: 2, message: 'Раз два три елочка гори!', name: 'Кто то из грота'}
]

ReactDOM.render(
  <React.StrictMode>
    <App d={dialogsData} m={messageData} pi={profileInfo} pM={postMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
