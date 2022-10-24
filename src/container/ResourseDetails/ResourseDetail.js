import React,{Component} from 'react'
import Aux from '../../hoc/Auxiliary.js'
import cssClass from './ResourseDetail.module.css'
import WebFont from 'webfontloader';
import SearchBar from '../../component/Navigation/UI/SearchBar/SearchBar.js';
import axios from 'axios';
import Errorhandler from '../../hoc/ErrorHandler/ErrorHandlerWrapper.js';
import ResoursItemsDetails from '../../component/RequestDetailComponent/RequestDetail.js';
import Button from '../../hoc/Buttom/Buttom.js';
import ResourseItemList from '../../component/resourseItemList/resourseItem';
import Communication from  '../../component/Communication/Communication';
//Resourse Detail Page for /${ResourseId}
class ResourseDetails extends Component
{
    state={
        RequestItemDetails:null,
                Error:{},
                hidden:true,

                itemRequestToBedelete:[],
                itemTobeUpdatedId:0,
                IstobeUpdate:false
    }

    hidder=()=>{
        this.setState((prevstate,props)=>{
                    return {hidden:!prevstate.hidden}
                }
        )
    }
    Sortit=(type)=>{
       // console.log(type)
        const array=this.state.RequestItemDetails.resource_items
        if(type==1)
        {
            //Date

            array.sort(
                (a, b) => 
                (a.createdAt <b.createdAt) ? 1 : (a.createdAt > b.createdAt) ? -1 : 0);
        }
        else if(type==2)
        {//Asscending
            array.sort(
                (a, b) => 
                (a.title >b.title) ? 1 : (a.title < b.title) ? -1 : 0);
            
        } 
        else
        {
            //Descending
            array.sort(
                (a, b) => 
                (a.title <b.title) ? 1 : (a.title > b.title) ? -1 : 0);
        }
        const updateValue=this.state.RequestItemDetails;
       // console.log(array);
        updateValue.resource_items=array
        this.setState({RequestItemDetails:updateValue})
    }

     

    selectedItems=(value)=>{
         
        let myArray=this.state.itemRequestToBedelete;
       // console.log(myArray)
        if(myArray.includes(value))
        {
            
            myArray=myArray.filter(val=>{
                
                return val!=value 
            })

            this.setState({itemRequestToBedelete:myArray})
           // console.log(myArray)
            return
        }
        myArray.push(value)

       
        // this.state.RequestItemDetails.foreach(values=>{
        //     if(values.id==value)
        //     {
        //         myArray.push(value);
        //     }
        // })

        this.setState({itemRequestToBedelete:myArray})
    }
    componentDidMount()
    {
        const parameter=this.props.params
    
        axios.get(`https://media-content.ccbp.in/website/react-assignment/resource/${parameter.id}.json`).then(response=>{
           this.setState({RequestItemDetails:response.data})
          // console.log(response.data);
       }).catch(e=>{
           
           this.setState({Error:e})
       })


        WebFont.load({
            google: {
              families: ['HK Grotesk']
            }
          });
    }
    componentWillUnmount()
    {
        console.log("ComponentUnmount ResourseDetail")
    }

    removeItems=()=>{
        
       const removeElement=this.state.RequestItemDetails.resource_items.filter((val)=>{

        if(this.state.itemRequestToBedelete.includes(val.id))
        {
            return false
        }
        return true;
       })
      // console.log(removeElement)
       const ReqDetails={...this.state.RequestItemDetails}
       ReqDetails.resource_items=removeElement

       this.setState({RequestItemDetails:ReqDetails,itemRequestToBedelete:[]})
    }
    updateResourse=(value)=>{

        if(this.state.IstobeUpdate)
        {
            // console.log("Update")
            const UpdatedItems={...this.state.RequestItemDetails,...value}

            //  console.log(value,this.state.RequestItemDetails,UpdatedItems)
            this.setState({RequestItemDetails:UpdatedItems})
        }

        this.setState((prevstate,props)=>{
            return {IstobeUpdate:!prevstate.IstobeUpdate}
        })
    }
    CancelUpdate=(CallBack)=>{

        CallBack(this.state.RequestItemDetails)
        console.log("WEA",this.state.RequestItemDetails)
        this.setState({IstobeUpdate:false,RequestItemDetails:this.state.RequestItemDetails})

    }
    Goback=()=>{
        
    }

    render()
    {
       
        // console.log(this.state.itemRequestToBedelete)
        // console.log(this.state.hidden)
        return(this.state.RequestItemDetails?<Aux>
             
                <div className={cssClass.MainContaner}>
             
                
                            
                <div className={cssClass.requestBlock}>
                <div style={{cursor:'pointer'}} onClick={this.props.GoBack}>Back</div>
                    <ResoursItemsDetails updateResourse={this.updateResourse} CancelUpdate={this.CancelUpdate} IstobeUpdate={this.state.IstobeUpdate} onSubmit={this.updateResourse} title={this.state.RequestItemDetails.title} 
                            iconLink={this.state.RequestItemDetails.icon_url}
                            link={this.state.RequestItemDetails.link}
                            Description={this.state.RequestItemDetails.description}
                            category={"Category789456"}/> 
                    

                    
                    
                    <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                    <div className={cssClass.searchBlock}><h3>Items</h3> <SearchBar/></div>
                    <div className={cssClass.Main}>
                            <Communication Sortit={this.Sortit} status={this.state.hidden}/>
                            <div onClick={this.hidder} className={cssClass.Container}>Sort</div>
                            </div>
                    </div>


                    <div className={cssClass.requestContainer}>
                        <div></div>
                    {this.state.RequestItemDetails.resource_items.map(res=>{

                        return (<ResourseItemList check={this.state.itemRequestToBedelete.includes(res.id)} onclick={()=>this.selectedItems(res.id)} title={res.title} description={res.description} link={res.link}/>)
                    })}
                     
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'200px',marginTop:'20px'}}>
                    
                    

                        
                        <Button BackGroundcolor={this.state.itemRequestToBedelete.length>0?'#D7DFE9':'#2DCA73'} disable={this.state.itemRequestToBedelete.length>0} color={'white'} width={'93px'} height={'40px'}>Add Items</Button>
                        <Button onclick={this.removeItems} BackGroundcolor={this.state.itemRequestToBedelete.length>0?'#FF0B37':'#D7DFE9'} disable={!(this.state.itemRequestToBedelete.length>0)} color={'white'} width={'93px'} height={'40px'}>Delete</Button>
             
                    </div>
                    </div>

                </div>
            </Aux>:null)
    }
}
export default Errorhandler(ResourseDetails,axios);