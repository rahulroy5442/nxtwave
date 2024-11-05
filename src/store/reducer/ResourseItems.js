import * as ActionType from '../action/ActionType'
const Initialstate={
    ResourseItems:null,
    ReError:null
}
const AddItems=(state,action)=>{
  //  console.log('Reducer AddItems',action.AddResourseItems)
    return {
        ...state,
        ResourseItems:action.AddResourseItems
    } 
    
}
const UpdateResourse=(state,action)=>{
    //console.log('Reducer UpdateUtems',action.AddResourseItems)
    return {
        ...state,
        ResourseItems:action.AddResourseItems
    }
}
const UpdateError=(state,action)=>{
    return{
        ...state,
        ReError:action.Error
    }
}
const ResourseItems=(state=Initialstate,action)=>{
  //  console.log(action.type)

    switch(action.type)
    {
        case  ActionType.AddItems: return AddItems(state,action);
        case ActionType.UpdateValue:return UpdateResourse(state,action);
        case ActionType.ReError:return UpdateError(state,action);
        default:
            return state;
    }
}

export default ResourseItems