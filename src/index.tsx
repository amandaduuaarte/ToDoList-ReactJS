// import { StrictMode } from "react";
// import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";
// import { createServer, Model } from "miragejs";
// import  App from "./App";

// createServer({
//   models: {
//     task: Model,
//   },
//   seeds(server) {
//     server.db.loadData({
//       tasks: [],
//     });
//   },
//   routes() {
//     this.namespace = "api";
//     this.get("/task", () => {
//       return this.schema.all("tasks");
//     });
//     this.post("/task", (schema, request) => {
//       const data = JSON.parse(request.requestBody);

//       return schema.create("task", data);
//     });
//   },
// });

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
