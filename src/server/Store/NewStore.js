
import axios from 'axios';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import CombineReducer from '../../store/reducer/CombineReducer'; 
export default (req)=>{
    const InitalAxios=axios.create({
        baseURL:'http://localhost:8080/api/website/react-assignment',
        headers: { cookie: req.get('cookie') || '' }
    })
    const store =createStore(CombineReducer(),compose(applyMiddleware(thunk.withExtraArgument(InitalAxios))))
    return store;
}