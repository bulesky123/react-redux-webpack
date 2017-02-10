/**
 * Created by zhoufei on 2017/1/31.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducer from '../reducer/reducer';
import thunk from 'redux-thunk';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const createStoreWithMiddleware =applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
