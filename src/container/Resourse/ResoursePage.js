import React,{Component, useEffect, useState} from 'react'
import Aux from '../../hoc/Auxiliary.js'
import cssClass from './ResoursePage.module.css'
import IconSearch from '../../public/Logo/IconSearch.svg';
import ResoursItems from '../../component/ResourseItems/ResourseItems.js';
//import WebFont from 'webfontloader';
import SearchBar from '../../component/Navigation/UI/SearchBar/SearchBar.js';
import axios from 'axios';
import Errorhandler from '../../hoc/ErrorHandler/ErrorHandlerWrapper.js';
import { Link } from "react-router-dom";
//Main Resourse Page for location /
const Resourse=()=>
{
    const [RequestItemList,setRequestItemList]=useState([])
    const [RequestItemListBackUp,setRequestItemListBackUp]=useState([])
    const [Error,setError]=useState({})
    const [Currenttab,setCurrenttab]=useState(0)
    // state={
       
//kcjvjgmg
             
    //             Currenttab:0,
    // }
    

    const searchValue=(e)=>
    {
        console.log("JKQWER")
        let Result;
        
        if(!e.target.value)
        {
           
          changeTag(Currenttab)
        }
        else
        {
            
  
             Result=RequestItemListBackUp.map(res=>{
                if(res==null)
                {
                    return null;
                }
                const String1 =res.title
                if(String1==null)
                {
                    return null
                }
                if(String1.includes(e.target.value))
                    return res;
                return null;
            })
          

            
            setRequestItemList(Result)
        }
        
      
    }
  
    useEffect(()=>{
        
        
        axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json').then(response=>{
           
            setRequestItemList(response.data)
            setRequestItemListBackUp(response.data)
   
       }).catch(e=>{
      
        console.log(e)
       })


        // WebFont.load({
        //     google: {
        //       families: ['HK Grotesk']
        //     }
        //   });

       
        import('webfontloader').then(obj=>{

            obj.load({
                google: {
                  families: ['HK Grotesk']
                }
              })
          });
    },[])

    const changeTag=async (value)=>{

       
        
        let mainArray;
        setCurrenttab(value)
        await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json').then(response=>{
          // console.log(response.data);
           
        if(value==0)
        {
            mainArray=response.data
        }

          if(value==1)
          {
                mainArray=response.data.map(data=>{
                    if(data.tag=="request")
                        {
                            return data
                        }
                        return null;
                     
                })
          }
          //User Tag
          if(value==2)
          {
            mainArray=response.data.map(data=>{
                
                if(data.tag=="user")
                    {
                       
                        return data
                    }
                    return null;
                 
            })
          }

       }).catch(e=>{
           
           setError({Error:e})
       })
   
       setRequestItemList(mainArray);
       setRequestItemListBackUp(mainArray)
          //Request Tag
       
    }
    
        const arrCss=[cssClass.column,cssClass.overRiiber];
        //arrCss.push(cssClass.overRiiber)
        const dontsubmit=(e)=>{
            console.log(9)
            e.preventDefault()
        }
        return(
            <Aux>
                <a href='/9' onclick={dontsubmit}>Click me</a>
                <div data-test="ResourcePage" className={cssClass.MainContaner}>
                    {/*Navigator*/ /*Resourse , Request User*/}
                <ul className={cssClass.container}>
                    <li className={Currenttab==0?arrCss.join(' '):cssClass.column}  onClick={()=>changeTag(0)}>Resourse</li>
                    <li className={Currenttab==1?arrCss.join(' '):cssClass.column}  onClick={()=>changeTag(1)}>Request</li>
                    <li className={Currenttab==2?arrCss.join(' '):cssClass.column} onClick={()=>changeTag(2)}>User</li>
                </ul>

                <div className={cssClass.requestBlock}>
                    <SearchBar Search={searchValue}/>
                   

                    <div className={cssClass.requestContainer}>
                        {RequestItemList?RequestItemList.map(value=>{
                        
                            if(value==null)
                            {
                                return null;
                            }
                            return (
                            <ResoursItems  id={value.id} title={value.title} 
                            iconLink={value.icon_url}
                            link={value.link}
                            Description={value.description}
                            category={value.category}
                            />
                                )
                        }):null}
                    </div>
                </div>

                </div>
            </Aux>
        )
    
}

function InitialLoader (store,parameter){
  
    //console.log('FRom load',parameter)
    return new Promise((resolve,error)=>{
        resolve()
    })
 
}
export {InitialLoader}
export {Resourse}
export default Errorhandler(Resourse,axios);