import React,{Component} from 'react';
import cssClass from './requestItem.module.css';
import { useNavigate } from 'react-router-dom';
//Per Resourse Component
const ResoursItems=(props)=> 
{
    const history=useNavigate();
    let text=props.link;

    const gotonavigator=()=>{
        console.log(props.id)
        history(`/${props.id}`)
    }

    
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