/**
 * Created by zhoufei on 2017/1/31.
 */
import React, {Component, PropTypes} from 'react';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import template from '../Components/template';
import sh_home_qr from '../img/sh_home_qr.png'
import sh_home_tq from '../img/sh_home_tq.png'
import sh_home_ewm from '../img/sh_home_ewm.png'
import sh_home_gl from '../img/sh_home_gl.png'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            listDetail:[]
        }
    };

    componentWillMount() {

    };
    componentDidMount() {
		
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    };

    componentWillUpdate(nextProps,nextState){
        if(this.props!==nextProps){
            let data=nextProps.state;
            if(data&&data.data.length!=0){
                this.state.listDetail=data.data;
            }
        }
    };

    render() {
        return (
            <div>
                <div className="headerBox">
                    <ul className="icon_list">
                        <Link to="confirmOrder">
                            <li>
                                <span href="javascript:void(0)"><img src={sh_home_qr} alt="sh_home_gl"/></span>
                                <span href="javascript:void(0)" className="icon_name">确认订单</span>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <span href="javascript:void(0)"><img src={sh_home_gl} alt="sh_home_gl"/></span>
                                <span href="javascript:void(0)" className="icon_name">订单管理</span>
                            </li>
                        </Link>
                        <Link to="surename">
                            <li>
                                <span href="javascript:void(0)"><img src={sh_home_tq} alt="sh_home_gl"/></span>
                                <span href="javascript:void(0)" className="icon_name">表单提交</span>
                            </li>
                        </Link>
                        <Link to="">
                            <li>
                                <span href="javascript:void(0)"><img src={sh_home_ewm} alt="sh_home_gl"/></span>
                                <span href="javascript:void(0)" className="icon_name">生命周期</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="contentBox">
                    {
                        this.state.listDetail.map((item,i)=>
                            <div className="item" key={i}>
                                <div className="itemTitle">
                                    <p className="right"><span className="timeIcon"></span><i>2017-01</i></p>
                                    <p><span className="icon1"></span>今日交易金额</p>
                                </div>
                                <div className="itemContent">
                                    <div>
                                        <div className="canvasBox">
                                        </div>
                                        <div className="canvasIcon">
                                            <p><span></span><i>{item.sh_percent}</i><span></span><i>{item.xj_percent}</i></p>
                                        </div>
                                    </div>
                                    <div>
                                        <p><span className="spanIcon"></span>商品贷款</p>
                                        <p><span>￥</span><span><i>{item.sh_money}</i></span></p>
                                        <p><span className="spanIcon spanIcon1"></span>现金贷款</p>
                                        <p><span>￥</span><span><i>{item.xj_money}</i></span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="footer" id="footer">
                    <ul className="footerList">
                        <li  className="post"><div className="footer_icon index_icon"></div><p className="color_footer font12">首页</p></li>
                        <li><div className="footer_icon my_icon"></div><p className="color_footer font12">我的</p></li>
                    </ul>
                </div>
                <div className="ftBlank js_ftBlank"></div>
            </div>
        )
    };

    componentWillUnmount() {

    };
}

export default template({
    id: 'index',  //应用关联使用的redux
    component: Main,//接收数据的组件入口
    url: 'src/json/index.json',
    data:{}
});

