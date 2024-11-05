import React from "react";
import {mount, shallow} from 'enzyme';
import { Provider } from "react-redux";
//import './index.css';
import { Resourse } from "./ResoursePage.js";
import 'babel-polyfill';
import {render,act,screen} from '@testing-library/react'
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CombineReducer from '../../store/reducer/CombineReducer';
import { MemoryRouter } from 'react-router';
import App from "../../App";
import axios from "axios";
import renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json'
const InitalAxios=axios.create({
	baseURL:'https://media-content.ccbp.in/website/react-assignment'
});

jest.mock("../../store/action/Action.js")
import  {AddResourseItems} from '../../store/action/Action.js';
import ResoursePage from "./ResoursePage.js";



	const wrapperMount=()=>{
		return mount(<Resourse/>)
	}
describe('Describe',()=>
{
	

	it('Snapshot testing',()=>{
	
		var wrapper= wrapperMount();

	    expect(wrapper.find('[data-test="ResourcePage"]').length).toBe(1)
	})


}
)