import React, { useEffect } from "react"
import cssClass from './resourseItem.module.css'
import Button from "../../hoc/Buttom/Buttom"
//Resourse Items Componet
const ResourseItemList=(props)=>{

    return(
        <div className={cssClass.container} onClick={props.onclick}>

                            <div className={cssClass.Items} >
                            <div className={cssClass.ItemsContainer}><div className={cssClass.ItemsCon}>{props.title}</div></div>
                            <div className={cssClass.ItemsContainer}><div className={cssClass.ItemsCon}>{props.description}</div></div>
                            <div className={cssClass.ItemsContainer}><div className={cssClass.ItemsCon} style={{color:'#0B69FF'}}>{props.link}</div></div>
                            </div>

        <input type="checkbox" checked={props.check}/>
        <span className={cssClass.checkmark}></span>


        </div>
   )
}

export default ResourseItemList;