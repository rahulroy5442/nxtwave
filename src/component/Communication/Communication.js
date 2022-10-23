import React from 'react'
import css from './Communication.module.css'

import Sort from './account/ComponentSort'
//Sort Container
const funnc=(props)=>{

    const arrCss=[css.container];

    if(!props.status)
     {
        arrCss.push(css.containerAdd)
     }
    return(<div className={arrCss.join(' ')}>
        <ul className={css.ItemFlow}>
        <Sort onclick={()=>props.Sortit(1)}> <div style={{height:'100%',width:'100%'}}>Recently Added</div></Sort>
        <Sort onclick={()=>props.Sortit(2)}> <div style={{height:'100%',width:'100%'}}>Ascending </div></Sort>
        <Sort onclick={()=>props.Sortit(3)}><div style={{height:'100%',width:'100%'}}>Descending</div></Sort>
        </ul>
    </div>)
}

export default funnc;