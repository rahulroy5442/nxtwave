import React from "react"

const Button=(props)=>{
    let cursorType='pointer'
    if(props.disable)
    {
        cursorType='not-allowed'
    }
    return(
<button onClick={props.onclick} disabled={props.disable} style={{display:'flex',backgroundColor:props.BackGroundcolor,
color:props.color,border:'0px',
width:props.width,height:props.height,
margin:props.margin,

borderRadius:'5px',justifyContent:'center',alignItems:'center',cursor: cursorType}} type="button">{props.children}</button>
    )
}

export default Button