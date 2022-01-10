import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models:{
    transaction:Model, 
  },
  seeds(server){
    
    server.db.loadData ({
    tasks:[
  ]
  })
  },
  routes(){
    this.namespace = 'api'; 
    this.get('/tasks', ()=>{
      return this.schema.all('tasks');
    }) 
    this.post('/tasks',(schema,request)=>{

      const data = JSON.parse(request.requestBody)

      return schema.create('tasks',data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
