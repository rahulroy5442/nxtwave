import React from 'react'
import cssClass from './SearchBar.module.css'
import IconSearch from '../../../../public/Logo/IconSearch.svg'
const searchBar=(props)=>{
   
    const imageSrc={
        IconSearch:'../../../../public/Logo/IconSearch.svg'
    }
    return(
        <div className={cssClass.searchBar}>
                        
                        <div className={cssClass.boxIcon}>
                        <img src={IconSearch} className={cssClass.searchIcon}/>
                        </div>
                        
                        
                        
                        <input onChange={props.Search} className={cssClass.barSize} type="text" placeholder="Search" name="search"/>
                        
                    </div>
    );
}

export default searchBar;