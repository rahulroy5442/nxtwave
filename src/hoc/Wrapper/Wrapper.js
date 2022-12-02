import React,{ useEffect} from 'react'

import { Routes, Route, useParams } from 'react-router-dom';
import Aux from '../Auxiliary';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//Class to Functional Component Wrapper


const Wrapper = (props) =>{
    const params = useParams();
    const Component=props.WrappedComponent
    const navigate=useNavigate();
  

    const goBack=()=>{
    //    console.log(props.id)
        navigate('/', {replace: true});
    }

     useEffect(()=>{ 
console.log("Mount Wrapper ")
 
     return () => {
       console.log('cleanUp wrapper')
   }
  },[])

 
    return (
      <Component
        {...props}
        params={params}
        GoBack={goBack}
        
      />
    );
  };
  
  //const Relar class to function converter

  //   const Wrapper=(WrappedComponent)=>{
  //     const params = useParams();
     
  //   return ()=>{
      
      
  //         return <WrappedComponent {...params}/>
  //   }
  // }
    
  export default Wrapper;