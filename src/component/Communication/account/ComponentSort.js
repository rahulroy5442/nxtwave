import React, { Component } from "react";

import {NavLink} from 'react-router-dom'
import css from './ComponentSort.module.css'
//Sort Holder
class SortOrder extends Component
{
    render()
    {
        return(
            <li onClick={this.props.onclick} className={css.container}>
             
                <div>{this.props.children}</div>
            </li>
        )
                
        
    }
}
export default SortOrder