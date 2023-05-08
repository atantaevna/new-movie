import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setUpStore} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setUpStore()

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)