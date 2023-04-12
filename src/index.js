import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
  {
    id: 1,
    message: "Hi, how are you?",
    likesCount: 6,
  },
  {
    id: 2,
    message: "It's my first post",
    likesCount: 23,
  },
  {
    id: 3,
    message: "Cool",
    likesCount: 1,
  },
  {
    id: 4,
    message: "Thanks",
    likesCount: 17,
  },
];

let dialogs = [
  {
    id: 1,
    name: "Sasha"
  },
  {
    id: 2,
    name: "Sveta"
  },
  {
    id: 3,
    name: "Slava"
  },
  {
    id: 4,
    name: "Alex"
  },
  {
    id: 5,
    name: "Marina"
  },
  {
    id: 6,
    name: "Artur"
  },
  {
    id: 7,
    name: "Dima"
  },
  {
    id: 8,
    name: "Angelina"
  }
];

let messages = [
  {id: 1, message: "Hi"}, {id: 2, message: "How are you?"}, {id: 3, message: "Ok"}
]

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
