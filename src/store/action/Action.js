//import axios from "axios"
import * as ActionType from './ActionType';

export const AddResourseItems=(parameter)=>{


	return (dispatch,state,api)=>{
		return api.get(`/resource/${parameter.id}.json`).then(response=>{
			dispatch({type:ActionType.AddItems,AddResourseItems:response.data});
		}).catch(e=>{
			console.log('Error',e.message);
			dispatch({type:ActionType.ReError,Error:e.message});
		});
	};
};

export const UpdateResourseItems=(updateValue)=>{

	return {
		type:ActionType.UpdateValue,
		AddResourseItems:updateValue
	};
};