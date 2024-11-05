import React,{useEffect, useReducer} from 'react'
import Aux from '../../hoc/Auxiliary.js'
import cssClass from './ResourseDetail.module.css'
import SearchBar from '../../component/Navigation/UI/SearchBar/SearchBar.js';
import axios from 'axios';
import Errorhandler from '../../hoc/ErrorHandler/ErrorHandlerWrapper.js';
import ResoursItemsDetails from '../../component/RequestDetailComponent/RequestDetail.js';
import Button from '../../hoc/Buttom/Buttom.js';
import ResourseItemList from '../../component/resourseItemList/resourseItem';
import Communication from  '../../component/Communication/Communication';
import {connect} from 'react-redux'
import { useNavigate ,useParams} from 'react-router-dom';
import * as action from '../../store/action/Action'

const initialstate={
        
            Error:{},
            hidden:true,

            itemRequestToBedelete:[],
            itemTobeUpdatedId:0,
            IstobeUpdate:false
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'RequestItemDetails':
            return {...state,RequestItemDetails:action.RequestItemDetails}
            
        case 'Error':
            return {...state,Error:action.Error}
            
        case 'Hidden':
            return {...state,hidden:action.hidden}
        case 'ItemRequestToBedelete':
            return {...state,itemRequestToBedelete:action.itemRequestToBedelete}
        case 'ItemTobeUpdatedId':
            return {...state,itemTobeUpdatedId:action.itemTobeUpdatedId}
        case 'IstobeUpdate':
            return {...state,IstobeUpdate:action.IstobeUpdate}
        case 'CancelUpdate':
            return {...state,IstobeUpdate:false}
        case 'Reset':
            return {...action.reset}
            default:
                return state
    } 
}
const ResourseDetails=(props)=>
{

    const [todos,dispatch]=useReducer(reducer,initialstate)
    const params = useParams();

    const navigate=useNavigate();

  const hidder=()=>{
        dispatch({type:'Hidden',hidden:!todos.hidden})
        
    }
   const Sortit=(type)=>{
       // (type)
        const array=props.RequestItemDetails.resource_items
       // console.log("JKD")
        if(type==1)
        {
       
            array.sort(
                (a, b) => 
                (a.createdAt <b.createdAt) ? 1 : (a.createdAt > b.createdAt) ? -1 : 0);
                //console.log(array)
        }
        else if(type==2)
        {//Asscending
            array.sort(
                (a, b) => 
                (a.title >b.title) ? 1 : (a.title < b.title) ? -1 : 0);
            
        } 
        else
        {
            //Descending
            array.sort(
                (a, b) => 
                (a.title <b.title) ? 1 : (a.title > b.title) ? -1 : 0);
        }
        const updateValue=props.RequestItemDetails;
       // (array);
        updateValue.resource_items=array

     

        props.UpdateItems({...updateValue})
       
    }

     

    const selectedItems=(value)=>{
         
        let myArray=todos.itemRequestToBedelete;
    
        if(myArray.includes(value))
        {
            
            myArray=myArray.filter(val=>{
                
                return val!=value 
            })
            dispatch({type:'ItemRequestToBedelete',itemRequestToBedelete:myArray})

            return
        }
        myArray.push(value)

       
        dispatch({type:'ItemRequestToBedelete',itemRequestToBedelete:myArray})
     
    }
    useEffect(()=>
    {
        const parameter=params
        props.AddItems(parameter)
        dispatch({type:'Reset',reset:{
        
            Error:{},
            hidden:true,

            itemRequestToBedelete:[],
            itemTobeUpdatedId:0,
            IstobeUpdate:false
            }})


          import('webfontloader').then(obj=>{

            obj.load({
                google: {
                  families: ['HK Grotesk']
                }
              })
          });

          return ()=>{
           props.UpdateItems(null)
          }
    },[])
  
   const removeItems=()=>{
        
       const removeElement=props.RequestItemDetails.resource_items.filter((val)=>{

        if(todos.itemRequestToBedelete.includes(val.id))
        {
            return false
        }
        return true;
       })
      // (removeElement)
       const ReqDetails={...props.RequestItemDetails}
       ReqDetails.resource_items=removeElement
       dispatch({type:'RemoveItem',RequestItemDetails:ReqDetails,itemRequestToBedelete:[]})
       
    }
    const updateResourse=(value)=>{

        if(todos.IstobeUpdate)
        {
            // ("Update")
            const UpdatedItems={...props.RequestItemDetails,...value}

            
            props.UpdateItems(UpdatedItems)
         
           
        }
        dispatch({type:'IstobeUpdate',IstobeUpdate:!todos.IstobeUpdate})
     
    }
   const CancelUpdate=(CallBack)=>{

        CallBack(props.RequestItemDetails)
        dispatch({type:'CancelUpdate',IstobeUpdate:false})
   
    }
     const goBack=()=>{
    //    console.log(props.id)
        navigate('/', {replace: true});
    }

   
        return((props.RequestItemDetails && !props.Error)?<Aux>
                
                <div className={cssClass.MainContaner}>
            
                
                            
                <div className={cssClass.requestBlock}>
                <div style={{cursor:'pointer'}} onClick={goBack}>Back</div>
                    <ResoursItemsDetails data-test="ResourceHeader" updateResourse={updateResourse} CancelUpdate={CancelUpdate} IstobeUpdate={todos.IstobeUpdate} onSubmit={updateResourse} title={props.RequestItemDetails.title} 
                            iconLink={props.RequestItemDetails.icon_url}
                            link={props.RequestItemDetails.link}
                            Description={props.RequestItemDetails.description}
                            category={"Category789456"}/> 
                    
                    

                    
                    
                    <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                    <div className={cssClass.searchBlock}><h3>Items</h3> <SearchBar/></div>
                    <div className={cssClass.Main}>
                            <Communication Sortit={Sortit} status={todos.hidden}/>
                            <div onClick={hidder} className={cssClass.Container}>Sort</div>
                            </div>
                    </div>


                    <div className={cssClass.requestContainer}>
                        <div></div>
                    {props.RequestItemDetails.resource_items.map(res=>{

                        return (<ResourseItemList check={todos.itemRequestToBedelete.includes(res.id)} onclick={()=>selectedItems(res.id)} title={res.title} description={res.description} link={res.link}/>)
                    })}
                     
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'200px',marginTop:'20px'}}>
                    
                    

                        
                        <Button BackGroundcolor={todos.itemRequestToBedelete.length>0?'#D7DFE9':'#2DCA73'} disable={todos.itemRequestToBedelete.length>0} color={'white'} width={'93px'} height={'40px'}>Add Items</Button>
                        <Button onclick={removeItems} BackGroundcolor={todos.itemRequestToBedelete.length>0?'#FF0B37':'#D7DFE9'} disable={!(todos.itemRequestToBedelete.length>0)} color={'white'} width={'93px'} height={'40px'}>Delete</Button>
             
                    </div>
                    </div>

                </div>
            </Aux>:<div>{props.Error}</div>)
    
}

const state=(stateManager)=>{
    return {
        RequestItemDetails:stateManager.ResourseItems.ResourseItems,
        Error:stateManager.ResourseItems.ReError
    }
}
const dispatch=(dispatcher)=>{
   
    return {
        AddItems:(parameter)=>dispatcher(action.AddResourseItems(parameter)),
        UpdateItems:(updateValue)=>dispatcher(action.UpdateResourseItems(updateValue))
    }
}
function InitialLoader (store,parameter){
  
  //  console.log('We go',store.getState());
    return store.dispatch(action.AddResourseItems(parameter))
 
}
export {InitialLoader}
export default connect(state,dispatch)(Errorhandler(ResourseDetails,axios));