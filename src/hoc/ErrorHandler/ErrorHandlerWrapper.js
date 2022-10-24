import React, { Component } from 'react'

import Aux from '../Auxiliary'
//Error handler
const Errorhandler=(WrrapedComponent,axios)=>{
    

    return(
        class extends Component{
            state={
                error:null
            }
            componentWillMount(){
           
              this.reqInterceptor=  axios.interceptors.request.use(req => {
                    this.setState({error: null});
                    
                    return req;
                },error=>{
                 
                    this.setState({error:error.message})
                    return Promise.reject(error);
                });
                  //To Received Error and to display it
               this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                  console.log(error.message)
                    this.setState({error: error.message});
                    return Promise.reject(error);
                });
            }
            componentWillUnmount() {
               console.log('Comp Unmount')
                axios.interceptors.request.eject(this.reqInterceptor);
                axios.interceptors.response.eject(this.resInterceptor);
            }
    
            changeErrorStatus=()=>{
                this.setState({error:null})
            }
            render(){
       
                return(
                    <Aux>
                        {/*Display error on the screen*/}
                            {this.state.error?this.state.error:null}              
                        

                        <WrrapedComponent {...this.props}/>
                    </Aux>
                )
            }
        }
    )
}

export default Errorhandler;