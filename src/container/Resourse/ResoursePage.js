import React,{Component} from 'react'
import Aux from '../../hoc/Auxiliary.js'
import cssClass from './ResoursePage.module.css'
import IconSearch from '../../public/Logo/IconSearch.svg';
import ResoursItems from '../../component/ResourseItems/ResourseItems.js';
import WebFont from 'webfontloader';
import SearchBar from '../../component/Navigation/UI/SearchBar/SearchBar.js';
import axios from 'axios';
import Errorhandler from '../../hoc/ErrorHandler/ErrorHandlerWrapper.js';
//Main Resourse Page for location /
class Resourse extends Component
{
    state={
        RequestItemList:[
                ],

                Error:{},
                Currenttab:0,
                RequestItemListBackUp:[]

    }
    
    componentWillUnmount()
    {
        console.log("ComponentUnmount Resourse Page")
    }
    searchValue=(e)=>
    {
        console.log(e.target.value);
        
        let Result;
        
        if(!e.target.value)
        {
            console.log("Res"+this.state.Currenttab)
          this.changeTag(this.state.Currenttab)
        }
        else
        {
            
            console.log(this.state.RequestItemListBackUp)
             Result=this.state.RequestItemListBackUp.map(res=>{
                if(res==null)
                {
                    return null;
                }
                const String1 =res.title
                if(String1==null)
                {
                    return null
                }
                if(String1.includes(e.target.value))
                    return res;
                return null;
            })
            console.log(Result)

            
            this.setState({RequestItemList:Result})
        }
        
      
    }
  
    componentDidMount()
    {
        
        
        axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json').then(response=>{
           
            this.setState({RequestItemList:response.data})
            this.setState({RequestItemListBackUp:response.data})
          // console.log(response.data);
       }).catch(e=>{
      
        console.log(e)
       })


        WebFont.load({
            google: {
              families: ['HK Grotesk']
            }
          });


    }

    changeTag=async (value)=>{

       
        console.log(value)
        let mainArray;
        this.setState({Currenttab:value})
        await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json').then(response=>{
          // console.log(response.data);
           
        if(value==0)
        {
            mainArray=response.data
        }

          if(value==1)
          {
                mainArray=response.data.map(data=>{
                    if(data.tag=="request")
                        {
                            return data
                        }
                        return null;
                     
                })
          }
          //User Tag
          if(value==2)
          {
            mainArray=response.data.map(data=>{
                
                if(data.tag=="user")
                    {
                       
                        return data
                    }
                    return null;
                 
            })
          }

       }).catch(e=>{
           
           this.setState({Error:e})
       })
       console.log(mainArray);
       this.setState({RequestItemList:mainArray});
       this.setState({RequestItemListBackUp:mainArray})
          //Request Tag
       
    }
    render()
    {
        const arrCss=[cssClass.column];
        arrCss.push(cssClass.overRiiber)
        return(
            <Aux>
                <div className={cssClass.MainContaner}>
                    {/*Navigator*/ /*Resourse , Request User*/}
                <ul className={cssClass.container}>
                    <li className={this.state.Currenttab==0?arrCss.join(' '):cssClass.column}  onClick={()=>this.changeTag(0)}>Resourse</li>
                    <li className={this.state.Currenttab==1?arrCss.join(' '):cssClass.column}  onClick={()=>this.changeTag(1)}>Request</li>
                    <li className={this.state.Currenttab==2?arrCss.join(' '):cssClass.column} onClick={()=>this.changeTag(2)}>User</li>
                </ul>

                <div className={cssClass.requestBlock}>
                    <SearchBar Search={this.searchValue}/>
                   

                    <div className={cssClass.requestContainer}>
                        {this.state.RequestItemList?this.state.RequestItemList.map(value=>{
                        
                            if(value==null)
                            {
                                return null;
                            }
                            return (
                            <ResoursItems onClick={this.DetailPageNavigator} id={value.id} title={value.title} 
                            iconLink={value.icon_url}
                            link={value.link}
                            Description={value.description}
                            category={value.category}
                            />
                                )
                        }):null}
                    </div>
                </div>

                </div>
            </Aux>
        )
    }
}
export default Errorhandler(Resourse,axios);