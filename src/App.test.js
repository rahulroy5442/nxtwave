import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import { loadableReady } from '@loadable/component';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CombineReducer from './store/reducer/CombineReducer';
import * as action from "./store/action/Action.js";
import axios from 'axios';
jest.mock('./store/action/Action.js',()=>{
	const originalModule = jest.requireActual("./store/action/Action.js");

	return{ __esModule: true,
		...originalModule,
		AddResourseItems: jest.fn().mockReturnValue( {type:'AddItems',AddResourseItems:{"id":"Roytion"}} )
    }
});
const InitalAxios=axios.create({
	baseURL:'https://media-content.ccbp.in/website/react-assignment'
});
var w2=(initstate)=>createStore(CombineReducer(),initstate,applyMiddleware(thunk.withExtraArgument(InitalAxios)));
const initalLoader={
	"id": "1",
	"title": "Nickelson and Sons",
	"icon_url": "http://loremflickr.com/640/480",
	"link": "https://gaseous-pod.net",
	"description": "Eligendi cum eligendi nemo accusamus natus vero dolor.",
	"resource_items": [
	{
	"createdAt": "2022-08-01T08:24:14.476Z",
	"title": "Architect",
	"description": "Aut eum id id. Eos recusandae iure impedit dolores a magni at. Et aut consequatur rerum amet quisquam aliquam.",
	"link": "http://impish-code.info",
	"id": "1"
	},
	{
	"createdAt": "2022-08-01T23:00:27.554Z",
	"title": "Strategist",
	"description": "Officiis placeat dignissimos fuga autem. Sed veniam ratione consequatur rerum necessitatibus reiciendis cumque facere et. Aut et accusantium ea ullam ut aut dolorem.",
	"link": "http://pushy-oatmeal.biz",
	"id": "2"
	},
	{
	"createdAt": "2022-08-01T07:32:00.803Z",
	"title": "Liaison",
	"description": "Officia et aut. Quasi voluptatibus fugit eaque nihil id et rem. Dolorem totam pariatur ut aperiam sit.",
	"link": "http://deep-billboard.org",
	"id": "3"
	},
	{
	"createdAt": "2022-08-01T18:58:06.080Z",
	"title": "Associate",
	"description": "Dolorem quis voluptas. Incidunt corrupti vitae ullam cum quod atque labore nulla. Quis quaerat qui eius. Dolorem sunt perferendis consequatur. Accusantium consectetur deserunt vel quod doloribus quia. Veritatis occaecati est aut ex iste perferendis aperiam aut.",
	"link": "https://offensive-cruise.name",
	"id": "4"
	},
	{
	"createdAt": "2022-08-01T16:46:30.756Z",
	"title": "Liaison",
	"description": "A possimus beatae quod. Blanditiis in ullam vitae est dolores. Tenetur dolores provident est ratione. Nihil autem nam possimus.",
	"link": "https://upright-best-seller.net",
	"id": "5"
	}
	]
	}
describe("App",()=>{
    let eachStore;
    beforeEach(()=>{
        eachStore=w2({ResourseItems:{ResourseItems:{...initalLoader},
            ReError:null}})
    })
    test('renders learn react link', () => {
    shallow(<App/>)
    });


    test("Store",()=>{

        eachStore.dispatch(action.AddResourseItems())

        console.log(eachStore.getState())
    })

})