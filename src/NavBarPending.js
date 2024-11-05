import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate ,useParams} from 'react-router-dom';


const NavBarPending=(props)=>{
    var currentLocation=useParams().id
    const [location,setLocation]=useState({
      previousLocation: null,
      currentLocation: useParams().id
    })

    const ref = useRef();

    useEffect(() => {
      const previousLocation = location.currentLocation
   
      const navigated = currentLocation !== previousLocation
      if (navigated) {
        // save the location so we can render the old screen
        setLocation(()=> {
          return {previousLocation,
          currentLocation}
        })
        }
   
    
    }, [ props, state])

    // static getDerivedStateFromProps(props, state) {
    //   const currentLocation = props.location
    //   const previousLocation = state.currentLocation
   
    //   const navigated = currentLocation !== previousLocation
    //   if (navigated) {
    //     // save the location so we can render the old screen
    //     return {
    //       previousLocation,
    //       currentLocation
    //     }
    //   }
   
    //   return null
    // }
   
    useEffect( ()=>{
      const navigated = prevProps.location !== curentlocation
   
      if (navigated) {
        // load data while the old screen remains
        loadNextData(routes, this.props.location).then(data => {
          putTheDataSomewhereRoutesCanFindIt(data)
          // clear previousLocation so the next screen renders
          setLocation((prevState)=>{
            return {
                currentLocation:prevState.currentLocation,
            previousLocation: null
            }
            }
          )
        })
      }
      ref.current=props;
    })
   

      const { children, curentlocation } = {children:props.children,currentLocation}
      const { previousLocation } = location
   
      // use a controlled <Route> to trick all descendants into
      // rendering the old location
      return (
        <Route 
          location={previousLocation || curentlocation}
          render={() => children}
        />
      )
}
  

  export default NavBarPending