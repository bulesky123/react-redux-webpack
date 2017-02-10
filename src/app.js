import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './route/router'; //路由配置
import configureStore from './redux/store/store';
import './config/config.js';//引入默认配置
const store = configureStore();
import './css/common.css';
import './css/reset.css';
import './css/dialog.css';
//import './css/orderList.css';
//import './css/page.css';
store.subscribe(() => { //监听state变化
    //console.log(store.getState())
});

render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);

