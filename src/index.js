import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {setUpStore} from "./redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "react-bootstrap";


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setUpStore();
root.render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);
