/**
 * Created by zhoufei on 2017/1/31.
 */
import React from 'react'
import { is, fromJS} from 'immutable';
import template from '../Components/template';
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "merchantName":"",
            "userMobile":"",
            "loanTotalAmount":"",
            "loanPeriod":"",
            "downPaymentAmount":"",
            "createTime":"",
            "displayOrderId":"",
            agreeClassName:''
        }
    }
    componentDidMount() {

    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    };

    componentWillUpdate(nextProps,nextState){
        if(this.props!==nextProps){
            let data=nextProps.state;
            if(data&&data.data.length!=0){
                this.state.merchantName=data.data.merchantName;
                this.state.userMobile=data.data.userMobile;
                this.state.loanPeriod=data.data.loanPeriod;
                this.state.downPaymentAmount=data.data.downPaymentAmount;
                this.state.loanTotalAmount=data.data.loanTotalAmount;
                this.state.createTime=data.data.createTime;
                this.state.displayOrderId=data.data.displayOrderId;
            }
        }
    };
    handleSubmitClick() {
        this.setState({
            agreeClassName:'active'
        });
        this.props.getData('/src/json/confirmOrder.json',{sales_money:"hhha"},(res) => {
            if (res.http_code == 200) {
                this.setState({
                    "merchantName":"",
                    "userMobile":"",
                    "loanTotalAmount":"",
                    "loanPeriod":"",
                    "downPaymentAmount":"",
                    "createTime":"",
                    "displayOrderId":"",
                    agreeClassName:''
                });
            }else{

            }
            location.hash='#/index';
        },'input')
    }
    handleAgreeCLick() {
        this.setState({
            agreeClassName:this.state.agreeClassName ? '' :'active'
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="confirmeBox">
                        <h1>{this.state.merchantName}</h1>
                        <p><span>{this.state.userMobile}</span><span>分期用户：</span></p>
                        <p><span className="type"></span><span>交易类型：</span></p>
                        <p><span>{this.state.loanTotalAmount}</span><span>分期金额：</span></p>
                        <p><span>{this.state.loanPeriod}</span><span>分期期数：</span></p>
                        <p><span>{this.state.downPaymentAmount}</span><span>首付金额：</span></p>
                        <p><span>{this.state.createTime}</span><span>创建时间：</span></p>
                        <p><span>{this.state.displayOrderId}</span><span>订单编号：</span></p>
                    </div>
                    <div className="agreementBox">
                        <p><span onClick={this.handleAgreeCLick.bind(this)} className={this.state.agreeClassName+" agree"}></span>同意<a href="/index">《商户协议》</a></p>
                        <p>确认订单视为阅读并同意《商户协议》</p>
                    </div>
                    <div className="bottonBox">
                        <p className="comfireBtn" onClick={this.handleSubmitClick.bind(this)}>确认订单</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default template({
    id: 'confirmOrder',  //应用关联使用的redux
    component: Main,//接收数据的组件入口
    url: 'src/json/confirmOrder.json',
    data:{}
});