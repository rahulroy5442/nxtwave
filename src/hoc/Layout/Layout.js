import React, { Component } from 'react'
import Aux from '../Auxiliary'
import cssClass from './Layout.module.css'
import Header from '../../component/Navigation/Header/Header'
//Layout Page
class Layout extends Component
{
    render()
    {
        return(
           
          <Aux>
          <div className={cssClass.controler}>
          <Header/> 
          
          <div className={cssClass.container}>
                {this.props.children}
          </div>

         
          </div>
          </Aux>
          
        )
    }
}

export default Layout