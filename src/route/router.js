/**
 * Created by zhoufei on 2017/1/31.
 */
import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import index from '../views/index'; //销售录入

class Roots extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

//const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const confirmOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../views/confirmOrder').default)
    },'confirmOrder')
};
const surename = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../views/surename').default)
    },'surename')
};
const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots}>
            <IndexRoute component={index} />//首页
            <Route path="index" component={index} />
            <Route path="confirmOrder" getComponent={confirmOrder} />//确认订单
            <Route path="surename" getComponent={surename} />//实名认证
        </Route>    
    </Router>
);

export default RouteConfig;