/**
 * Created by zhoufei on 2017/2/10.
 */
import Immutable from 'immutable';
import { GET_DATA_START ,GET_DATA_SUCCESS} from '../action/action';

const defaultlState = Immutable.fromJS({data: {}, isFetching: false});
//手动获取数据
export const requestData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_DATA_START:
            return state;
        case GET_DATA_SUCCESS:
            action.success(action.json);
            state[action.name] = action.json;
            return state;
        default:
            return state;
    }
};
