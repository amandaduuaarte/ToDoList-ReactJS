import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { TasksProvider } from "./hooks/useTasks";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
);
