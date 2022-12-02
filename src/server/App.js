
import Express from 'express'
import React from 'react'
import path from "path";
import App from '../App.js'
import fs from "fs";
import ReactDOMServer  from 'react-dom/server'
//import {StaticRouter} from 'react-router-dom'
import {StaticRouter} from 'react-router-dom/server'
const app = Express()
const port = 8080
const router = Express.Router()

app.use('/',Express.static(path.resolve(__dirname, "../../", "./dist")));


router.get("*", (req, res) => {
  
  fs.readFile(path.resolve(__dirname,'../../',"./dist/Main.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
     const context={}
    
     res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<StaticRouter location={req.url} context={context}> <App /></StaticRouter>)}</div>`
      )
    );
  });
});


// 
app.use(router)
//app.use(router)
app.listen(port,()=>{
  console.log(port)
})