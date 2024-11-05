import React from "react";
import {mount, shallow} from 'enzyme';

import 'babel-polyfill';
import axios from "axios";
import Layout from "./Layout.js";

jest.mock("../../store/action/Action.js")




	const wrapperMount=()=>{
		return shallow(<Layout/>)
	}
describe('Describe',()=>
{
	

	it('Snapshot testing',()=>{
	
		var wrapper= wrapperMount();

	    expect(wrapper.find('[data-test="Resourcelayout"]').length).toBe(2)
	})


}
)