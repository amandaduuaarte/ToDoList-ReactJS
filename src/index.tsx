import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models:{
    task:Model, 
  },
  seeds(server){
    
    server.db.loadData ({
    tasks:[
  ]
  })
  },
  routes(){
    this.namespace = 'api'; 
    this.get('/task', ()=>{
      return this.schema.all('tasks');
    }) 
    this.post('/task',(schema,request)=>{

      const data = JSON.parse(request.requestBody)

      return schema.create('task',data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
