import React, { useState,useEffect } from 'react'
import Aux from '../../../hoc/Auxiliary'
import cssClass from './Header.module.css'
import NxtWaveLogo from '../../../public/Logo/NxtWaveLogo.svg'
import userLogo from '../../../public/Logo/SampleLogo.jpg'
const Header=()=>{

    const imageSrc={
        NxtWaveLogo:'../../../public/Logo/NxtWaveLogo.svg',
        userLogo:'../../../public/Logo/SampleLogo.jpg'
    }
    return(
      
        <Aux>
        <div className={cssClass.container}> 
        <img src={NxtWaveLogo} className={cssClass.NxtWaveLogoContainer}/>     
        <img src={userLogo} className={cssClass.UserLogo}/> 
        
        </div>
            
        </Aux>
    )
}

export default Header