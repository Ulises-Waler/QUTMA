import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Header from './Header.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import RecoverPassword from './RecoverPassword';
import {ListUsers} from './ListUsers.js';
import { Registro } from './Registro';
import {CreateQuestionnaire} from './CreateQuestionnaire.js';
import UseComponent from './ComponentUse.js';
import { AnswerQuestionnaire } from './Components/AnswerQuestionnaire.js';
import { Dashboard } from './Dashboard.js';
import { ShowQuestionnaires } from './ShowQuestionnaires.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  
  {
    path: "/recover-password",
    element: <RecoverPassword/>
  },
  {
    path: "/home",
    element: <Dashboard/>
  },
  {
    path: "/register",
    element: <Registro/>
  },
  {
    path: "/create-questionnaire/:id",
    element: <CreateQuestionnaire/>
  },
  {
    path: "/grafica",
    element: <UseComponent/>
  },
  {
    path: "/questionnaire",
    element: <AnswerQuestionnaire/>
  },
  {
    path: "/list-users",
    element: <ListUsers/>
  },
  {
    path: "/list-q",
    element: <ShowQuestionnaires/>
  },
]);

const user ={
  name:"Ulises",
  logined: true,
  rol:"Client"
};
localStorage.user = JSON.stringify(user);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> <>
  {
    user?.logined == true && (
        <Header/>
    )
  }
  <RouterProvider router={router} />
  </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();