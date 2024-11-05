import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import { loadableReady } from '@loadable/component';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CombineReducer from './store/reducer/CombineReducer';
import axios from 'axios';

const InitalAxios=axios.create({
	baseURL:'https://media-content.ccbp.in/website/react-assignment'
});
//const composeEnhancer=process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose


const store=createStore(CombineReducer(),window.INITIAL_STATE,applyMiddleware(thunk.withExtraArgument(InitalAxios)));

loadableReady(()=>{
	ReactDOM.hydrateRoot (document.getElementById('root'),
		<Provider store={store}>
 
			<BrowserRouter basename='nxtwave'>
				<App/> 
			</BrowserRouter> 
    
		</Provider>);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
