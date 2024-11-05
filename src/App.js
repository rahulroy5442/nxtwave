import React,{Component} from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Routes} from 'react-router-dom';
import loadable from '@loadable/component';
const ResoursePage = loadable(() => import('./container/Resourse/ResoursePage.js'),{ssr: true});
//const ResourseDetail = loadable(() => import('./container/ResourseDetails/ResourseDetail'),{ssr: true});
import ResourseDetail from './container/ResourseDetails/ResourseDetail'
class App extends Component{

	render()
	{
		return (
			<Layout>
				<Routes>
					<Route path='/' exact element={<ResoursePage/>} />
					<Route path='/:id' element={<ResourseDetail/>}/> 
				</Routes>
			</Layout>
		);


	}
}

export default App;
