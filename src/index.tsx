import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import {App} from './App';
import {setUpStore} from "./redux";
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = setUpStore();
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

