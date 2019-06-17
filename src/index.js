import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import {store} from "./Redux/store";
import {Provider} from 'react-redux';
import {actionInitProducts} from "./Redux/action";
import data from './products';

store.dispatch(actionInitProducts({data}));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
