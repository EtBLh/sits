import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'reto';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Store from './store'
import NameInput from './components/NameInput';
import Room from './components/Room.tsx';


ReactDOM.render(
    <Provider of={Store}>
        <NameInput></NameInput>
        <Room></Room>
    </Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
