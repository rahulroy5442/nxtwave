import React from 'react'
import path from 'path'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import {StaticRouter} from 'react-router-dom/server'
import App from '../../App'
//import {renderRoutes} from 'react-router-config'
import AppRoute from '../../AppRoute'
const statsFile = path.resolve(__dirname,"../../","./dist/loadable-stats.json")


const extractor = new ChunkExtractor({ statsFile })
export default  (paths,context)=>{
    //console.log("JSA")
    const pageChunk=extractor.collectChunks(
        
        <StaticRouter location={paths} context={context}><App/></StaticRouter>
        
        )
    //console.log("Script tag",extractor.getScriptTags(),extractor.getLinkTags())
    return  pageChunk

}