/**
 * Created by zhoufei on 2017/2/10.
 */
import Immutable from 'immutable';
import { REQUEST_POSTS,RECEIVE_POSTS} from '../action/action';

const defaultlState = Immutable.fromJS({data: {}, isFetching: false});
//首次渲染时获取数据
export const fetchData = (state = defaultlState , action = {}) => {
    switch(action.type){
        case REQUEST_POSTS:
            return state.set('isFetching',true);
        case RECEIVE_POSTS:
            return Immutable.Map({'data':action.json,'isFetching':false});//返回一个新的state
        default:
            return state
    }
};
