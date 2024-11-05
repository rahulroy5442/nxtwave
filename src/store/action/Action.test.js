import React from "react";
import moxios from 'moxios';
import axios from "axios";

jest.mock('./Action.js')
// jest.mock('./Action.js',()=>{
// 	const originalModule = jest.requireActual("./Action.js");

// 	return{ __esModule: true,
// 		...originalModule,
// 		AddResourseItems: jest.fn().mockReturnValue({type: "mock" }),}
// });
import * as action from './Action'





import {mount} from 'enzyme';
import { Provider } from "react-redux";
//import './index.css';

import 'babel-polyfill';

import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CombineReducer from '../reducer/CombineReducer';
import { MemoryRouter } from 'react-router';
import App from "../../App";
import renderer from 'react-test-renderer';

const InitalAxios=axios.create({
	baseURL:'https://media-content.ccbp.in/website/react-assignment'
});
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

const shallowCom=()=>{
	const store=createStore(CombineReducer(),applyMiddleware(thunk.withExtraArgument(InitalAxios)));
		return store
}
	const wrapperMount=(url,store)=>{
		return mount(<Provider store={store}>
			<MemoryRouter initialEntries={[ url]}>
				  <App/>
			</MemoryRouter>
			</Provider>)
	}


describe('Testing',()=>{
    beforeEach(()=>
    {
        moxios.install(axios);
    })
    
    test('Testing Action',async ()=>{
       // console.log(action.AddResourseItems());

        let store=shallowCom();
		wrapperMount('/4',store);
	await	setTimeout(()=>{
			expect(action.AddResourseItems).toHaveBeenCalledTimes(1);
		},15000)
      //  expect(action.AddResourseItems).toHaveBeenCalledTimes(1);
    })
})

    
  
