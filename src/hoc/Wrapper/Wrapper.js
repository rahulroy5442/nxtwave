import React,{Component, useEffect} from 'react'

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
        console.log(props.id)
        navigate('/', {replace: true});
    }

     useEffect(()=>{

  //    const reqInterceptor=  axios.interceptors.request.use(req => {
  //       // this.setState({error: null});
        
  //       // return req;
  //   });
  //  const resInterceptor = axios.interceptors.response.use(res => res, error => {
      
  //       // this.setState({error: error.response.data.error});
  //   });
     return () => {
       console.log('cleanUp')
   }
  },[])
    // etc... other react-router-dom v6 hooks
  console.log(params)
    return (
      <Component
        {...props}
        params={params}
        GoBack={goBack}
        // etc...
      />
    );
  };
  
  export default Wrapper;