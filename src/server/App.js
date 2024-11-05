
import Express from 'express'
import React from 'react'
import path from "path";
//import App from '../App.js'
import 'babel-polyfill'
import ReactDOMServer from 'react-dom/server'
import createstore from './Store/NewStore'
import { Provider } from 'react-redux'
//import { loadData } from '../container/ResourseDetails/ResourseDetail';
//import { matchRoutes } from "react-router-config";
import { matchRoutes } from 'react-router-dom'
import serialize from 'serialize-javascript';
import * as resLoad from '../container/InitalLoaderContainer'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../App';
import proxy from 'express-http-proxy'
const statsFile = path.resolve(__dirname, "../../", "./dist/loadable-stats.json")


const extractor = new ChunkExtractor({ statsFile })


const app = Express();
const port = 8080;
const router = Express.Router();



const someRoutes = [
	{
		path: '/',
		InitialLoader: resLoad.ResourseLoader
	},
	{
		path: '/:id',
		InitialLoader: resLoad.ResourseDetailLoader
	},
]

app.use('/api', proxy('https://media-content.ccbp.in', {
	proxyReqOptDecorator(opts) {
		opts.headers['x-forwarded-host'] = `localhost:${port}`;
		return opts;
	}
}))
app.use('/', Express.static(path.resolve(__dirname, "../../", "./dist")));

router.get("*", (req, res) => {


	const store = createstore(req)

	var allDataLoad = []


	allDataLoad = matchRoutes(someRoutes, req.url).map((loadersIn) => {
		// res.send
		return loadersIn.route.InitialLoader ? loadersIn.route.InitialLoader(store, loadersIn.params) : null;
	})

	var didError = false
	Promise.all(allDataLoad).then(result => {

		const context = {}
		console.log(req.url)
		console.log(result)
		const pageChunk = extractor.collectChunks(

			<StaticRouter location={req.url} context={context}><App /></StaticRouter>

		)
		//    console.log("Script tag",extractor.getScriptTags(),extractor.getLinkTags())


		res.send(`<!doctype html>
     <html lang="en">
     
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width,initial-scale=1">
         <title>Document</title>
         <link href="css/main.css" rel="stylesheet">
         ${extractor.getLinkTags()}
         ${extractor.getStyleTags()}

         <script>
         console.log("KOLK")
         
          
          


         
        </script>
     </head>
     
     <body>
         <div id="root">${ReactDOMServer.renderToString(<Provider store={store}>
			{pageChunk/* {html(req.url,context)} */}
		</Provider>)}</div>
         <script type="text/javascript" charset="utf-8">window.INITIAL_STATE = ${serialize(store.getState())}</script>
          
         
         <script defer="defer" src="./js/main.js"></script>
         <script defer="defer">
         
         window.addEventListener('DOMContentLoaded', (event)=> {
          console.log("LPO")

          window.scroll({
            top: 1,
            left: 100,
            behavior: 'smooth'
          });
        
          });
         </script>
     </body>
     
     </html>`)

	}).catch(res => {
		console.log(res)
		res.send(`<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Document</title>
    </head>
    
    <body>
    ${res}
    </body>
    
    </html>`)
	})

})






app.use(router)
//app.use(router)
app.listen(port, () => {
	console.log('Running local host ' + port)
})