/**
 * Created by ���� on 2017/1/31.
 */
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import * as action from '../redux/action/action';


const template = mySeting => {
    let seting = {
        id: '', //Ӧ��Ψһid��ʾ
        url: '', //�����ַ
        data: {}, //���͸�����������
        component: <div></div> ,
        method:''
    };
    for (let key in mySeting) {
        seting[key] = mySeting[key];
    }

    class Index extends Component {
        static defaultProps = { seting }

        constructor(props,context) {
            super(props,context);
        }

        render() {
            return <this.props.seting.component {...this.props} state={this.props.state.toJS()}/>;
        }

        componentDidMount() {//��ȡ���
            if (this.props.seting.url) {
                this.props.fetchPosts(this.props.seting.url,this.props.seting.data,this.props.seting.method);
            }
        }

        componentWillReceiveProps(nextProps) {

        }

        shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.state.get('isFetching')) {
                return false
            }
            return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
        }
    }

    //mapStateToProps and mapDispatchToProps
    return connect(state => { //�����������ģ��󶨺�return��ȥ������·�ɵ�ʱ���õľ��Ǻ�redux�󶨵������������ʵÿ��·��ƥ��Ķ���ͬһ�������ֻ���������������ݲ�ͬ
        let {producRecord, saleRecord,requestData, testData} = state;
        return {
            state: state['fetchData'],
            producRecord ,
            saleRecord ,
            requestData
        }
    }, action)(Index); //����redux 
}

export default template;