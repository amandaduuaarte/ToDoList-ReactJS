// import { createContext, useState, useEffect, useContext } from "react";
// import { api } from "../services/api";

// interface taskProps {
//   id: string;
//   title: string;
//   description: string;
//   createdAt: string;
// }

// type TaskInput = Omit<taskProps, "createdAt">;

// interface taskProviderProps {
//   children: React.ReactNode;
// }

// interface TaskContextData {
//   tasks: taskProps[];
//   createTask: (tasks: TaskInput) => Promise<void>;
// }
// const TaskContext = createContext<TaskContextData>({} as TaskContextData);

// export function TaskProvider({ children }: taskProviderProps) {
//   const [tasks, setTasks] = useState<taskProps[]>([]);

//   useEffect(() => {
//     api.get("/task").then((res) => setTasks(res.data.tasks));
//   }, []);

//   async function createTask(TaskInput: TaskInput) {
//     const response = await api.post("/task", {
//       ...TaskInput,
//       createdAt: new Date(),
//     });
//     const { task } = response.data;

//     setTasks([...tasks, task]);
//   }

//   return (
//     <TaskContext.Provider value={{ tasks, createTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// }

// export function useTasks() {
//   const context = useContext(TaskContext);

//   return context;
// }
