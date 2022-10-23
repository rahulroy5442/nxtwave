import logo from './logo.svg';
import './App.css';
import {React,Component} from 'react'
import Layout from './hoc/Layout/Layout';
import ResoursePage from './container/Resourse/ResoursePage.js'
import ResourseDetails from './container/ResourseDetails/ResourseDetail';
import { Route, Routes ,Navigate,Redirect } from "react-router-dom";
import Wrapper from './hoc/Wrapper/Wrapper';
import ResourseDetail from './container/ResourseDetails/ResourseDetail';
class App extends Component{
  render()
  {
    
    
    return (
    <Layout>
      <Routes>
      <Route path='/' exact element={<Wrapper WrappedComponent={ResoursePage}/>} />
       <Route path='/:id' element={<Wrapper WrappedComponent={ResourseDetail}/>}/> 
      </Routes>
    </Layout>
    );


  }
}

export default App;
