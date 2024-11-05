import {combineReducers } from 'redux';
import ResourseReducer from './ResourseItems';
export default ()=>combineReducers({ResourseItems:ResourseReducer})