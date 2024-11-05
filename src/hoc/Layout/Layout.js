import React, { Component } from 'react'
import Aux from '../Auxiliary'
import cssClass from './Layout.module.css'
import Header from '../../component/Navigation/Header/Header'
//Layout Page Main
class Layout extends Component
{
    render()
    {
        return(
           
          <Aux>
          <div data-test="Resourcelayout" className={cssClass.controler}>
          <Header/> 
          <input type='text' />
          <div data-test="Resourcelayout" className={cssClass.container}>
                {this.props.children}
          </div>

         
          </div>
          </Aux>
          
        )
    }
}

export default Layout