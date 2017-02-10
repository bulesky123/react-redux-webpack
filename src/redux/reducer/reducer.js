/**
 * Created by zhoufei on 2017/1/31.
 */
import { combineReducers } from 'redux'
import {fetchData} from './index_reducer'
import {requestData} from './surename_reducer'
//连接reducers
//Redux提供的combineReducers函数可以帮助我们把reducer组合在一起，
// 这样我们就可以把Reducers拆分成一个个小的Reducer来管理Store了
const rootReducer = combineReducers({
    fetchData,
    requestData
});
export default rootReducer




