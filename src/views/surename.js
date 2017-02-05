/**
 * Created by zhoufei on 2017/2/4.
 */
import React from 'react'
import { is, fromJS} from 'immutable';
import template from '../Components/template';
import {Tool} from '../config/Tool'
let data=[
    {
        "ulContent": [
            {
                "inputName":"姓名",
                "placeholder":"请输入姓名",
                "id":"name"
            },
            {
                "inputName":"身份证号",
                "placeholder":"请输入身份证号",
                "id":"idCard"
            }],
        "ulTitle":"实名认证"
    },
    {
        "ulContent": [
            {
                "inputName":"银行卡号",
                "placeholder":"请输入借记卡卡号",
                "id":"bankCard"
            },
            {
                "inputName":"预留手机号",
                "placeholder":"请输入手机号",
                "id":"phoneNumber"
            }],
        "ulTitle":"储蓄卡信息"
    }
];
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "name":"",
            "idCard":"",
            "bankCard":"",
            "phoneNumber":""
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    };
    handleChange(type,event){
        if (type === 'idCard') {
            let value = event.target.value.replace(/\D/gi,'');
            this.setState({
                idCard:value
            })
        }else if (type === 'name') {
            this.setState({
                name:event.target.value
            });
        }else if(type === 'phoneNumber'){
            let value = event.target.value.replace(/\D/gi,'');
            this.setState({
                phoneNumber:value
            })
        }else if(type==='bankCard'){
            this.setState({
                bankCard:event.target.value
            })
        }
    }
    handleClick() {
        console.log(this.state);
        if (this.state.name == '') {
            Tool.alert('请输入姓名');
        }else if (this.state.idCard == '' || /^[1-9]\d{5}((1[89]|20)\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dx]$/i.test(this.state.idCard)) {
            Tool.alert('请输入正确的身份证号');
        }else if (this.state.bankCard== "" || !/^(\d{16}|\d{19})$/.test(this.state.bankCard)) {
            Tool.alert('请输入正确的银行卡号');
        }else if (this.state.phoneNumber == ''|| !/^1\d{10}$/.test(this.state.phoneNumber)) {
            Tool.alert('请输入正确的电话号码');
        }else{
                this.props.getData('src/json/confirmOrder.json',{name:this.state.name,idCard :this.state.idCard,bankCard :this.state.bankCard,phoneNumber :this.state.phoneNumber},(res) => {
                    if (res.http_code == 200) {
                        Tool.alert(res.data.msg);
                        this.setState({
                            "name":"",
                            "idCard":"",
                            "bankCard":"",
                            "phoneNumber":""
                        })
                    }else{
                        Tool.alert(res.msg)
                    }
                    location.hash="/#index";
                },'input');
        }
    }
    render() {
        return (
            <div>
                <form id="surename" style={{"backgroundColor":"#F3F3F3"}}>
                    <div>
                        {
                            data.map((items,i)=>
                                <div key={i}>
                                    <h3 className="title">{items.ulTitle}</h3>
                                    <ul className="zz-list">
                                        {
                                            items.ulContent.map((item,i)=>
                                                <li key={i}>
                                                    <label>{item.inputName}</label>
                                                    <input onBlur ={this.handleChange.bind(this,item.id)} ref={item.id} name="cardHolderName" type="text" placeholder={item.placeholder} />
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </form>
                <div className="foot_button">
                    <p className="nextSubmit" onClick={this.handleClick.bind(this)}>下一步</p>
                </div>
            </div>
        )
    }
}
export default template({
    id: 'surename',  //应用关联使用的redux
    component: Main,//接收数据的组件入口
    url: 'src/json/confirmOrder.json',
    data:{}
});