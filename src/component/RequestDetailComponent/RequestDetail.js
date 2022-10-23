import {Component, React,useEffect,useState} from 'react';
import cssClass from './requestItem.module.css';
import Button from '../../hoc/Buttom/Buttom';
const ResoursItemsDetails=(props)=> 
{
  
    let [inputParams,updateField]=useState({
        title:props.title,
        category:props.category,
        link:props.link,
        description:props.Description
    })
    console.log(props.Description,inputParams)  
   
    let text=inputParams.link;
    //console.log(inputParams)
    const ChecktheInput=(e)=>{
      // console.log(e.target.name)
        if(e.target.name=='title')
        {
            updateField({...inputParams,title:e.target.value})
        }
        else if(e.target.name=='category')
        {
            updateField({...inputParams,category:e.target.value})
        }
        else if(e.target.name=='link')
        {
          
             updateField({...inputParams,link:e.target.value}) 
        }
        else if(e.target.name=='description')
        {
            updateField({...inputParams,description:e.target.value}) 
        }

    }
    function inputField(val,type)
    {
        return <input type='text' value={val} name={type} onChange={ChecktheInput}/>
    }
    function ResetValue(PropsValueTobeReseted)
    {
        updateField({category:inputParams.category,title:PropsValueTobeReseted.title,link:PropsValueTobeReseted.link,description:PropsValueTobeReseted.description})
    }
    
    return (
        
        <div className={cssClass.container}>
    
            <div className={cssClass.companyContainer}>
                <img src={props.iconLink} className={cssClass.ImageContainer}/>
                
                <div className={cssClass.InfoComp}>
                 
                 <div style={{color:'#171F46',fontSize:'16px'}}>{props.IstobeUpdate?inputField(inputParams.title,'title'):inputParams.title}</div>
                 <div style={{fontSize:'12px',color:'#7E858E'}}>{props.IstobeUpdate?inputField(inputParams.category,'category'):inputParams.category}</div>

                </div>

            </div>

                <div style={{marginTop:'15px'}}>
                {!props.IstobeUpdate?<a href={inputParams.link} target='_blank' style={{color:'#0B69FF'}}>{`www.${text.substring(8)}`}</a>:inputField(inputParams.link,'link')}

                <div className={cssClass.textWrraper}>{props.IstobeUpdate?inputField(inputParams.description,'description'):inputParams.description}</div>
                </div>

                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'200px',marginTop:'20px'}}>
                        <Button onclick={()=>props.updateResourse(inputParams)} margin={'0px 0px 30px 0px'} BackGroundcolor={'#0B69FF'} color={'white'} width={'93px'} height={'40px'}>{props.IstobeUpdate?'SUBMIT':'UPDATE'}</Button>
                        {props.IstobeUpdate?<Button onclick={()=>props.CancelUpdate(ResetValue)} margin={'0px 0px 30px 0px'} BackGroundcolor={'#D7DFE9'} color={'white'} width={'93px'} height={'40px'}>CANCEL</Button>:null}
                    </div>
        </div>
    )
}
export default ResoursItemsDetails