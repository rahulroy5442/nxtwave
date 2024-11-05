import React,{Component} from 'react';
import cssClass from './requestItem.module.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import store from '../../server/Store/NewStore'
//Per Resourse Component
const ResoursItems=(props)=> 
{
    const history=useNavigate();
    let text=props.link;

    const gotonavigator=()=>{
        // console.log(props.id)
       //location.assign(`/${props.id}`)
      //await new Promise
    //   console.log('cgg')
    
    //   StoragePoint.push({id:props.id})
    //   console.log(StoragePoint)
      axios.get(`https://media-content.ccbp.in/website/react-assignment/resource/${props.id}.json`).then(response=>{
     //   console.log("Checker response",response)
        
   }).catch(e=>{
    console.log(e)
       
   })

//location.href = `/${props.id}`;
//console.log(store.getState())
        history(`/${props.id}`)
    }
//nf
    
    return (
        
        <div onClick={gotonavigator} className={cssClass.container}>
        
            <div className={cssClass.companyContainer}>
                <img src={props.iconLink} className={cssClass.ImageContainer}/>
                
                <div className={cssClass.InfoComp}>
                 
                 <div style={{color:'#171F46',fontSize:'16px'}}>{props.title}</div>
                 <div style={{fontSize:'12px',color:'#7E858E'}}>{props.category}</div>

                </div>

            </div>

                <div style={{marginTop:'15px'}}>
                <a href={props.link} target='_blank' style={{color:'#0B69FF'}}>{`www.${text.substring(8)}`}</a>

                <div className={cssClass.textWrraper}>{props.Description}</div>
                </div>
            
        </div>
    )
}
export default ResoursItems