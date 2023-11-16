import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface TasksData {
  id: string;
  title: string;
  isDone: boolean;
}

interface TaskContextProps {
  tasks: TasksData[];
  removeTask: (idTask: string) => void;
  createTask: (data: TasksData) => void;
  handleTaskSituation: (idTask: string) => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TaskContextProps>({} as TaskContextProps);

function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TasksData[]>([]);
  const initialData = {
    tasks: [],
  };

  const getAllTasks = useCallback((): void => {
    console.log("aquiiii", localStorage.data);
    if (localStorage.data) {
      const items = JSON.parse(localStorage.data || []);

      if (items) {
        setTasks(items.tasks);
      }
    }
  }, []);

  const createTask = (data: TasksData): void => {
    localStorage.setItem("data", JSON.stringify(initialData));

    const existingTasks = JSON.parse(localStorage.getItem("data") || "[]");

    existingTasks.tasks.unshift(data);
    localStorage.setItem("data", JSON.stringify(existingTasks));

    getAllTasks();
  };

  const removeTask = (idTask: string): void => {
    const storedData = JSON.parse(localStorage.getItem("data") || "[]");
    storedData.tasks = storedData.tasks.filter(
      (task: TasksData) => task.id !== idTask
    );
    localStorage.setItem("data", JSON.stringify(storedData));
    getAllTasks();
  };

  const handleTaskSituation = (idTask: string) => {
    const storedData = JSON.parse(localStorage.getItem("data") || "[]");
    // eslint-disable-next-line no-multi-assign
    const item = (storedData.tasks = storedData.tasks.filter(
      (task: TasksData) => task.id === idTask
    ));
    console.log(item);
    // item.isDone = !item.isDone;
    // localStorage.setItem("data", JSON.stringify(storedData));
    // getAllTasks();
  };

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, removeTask, handleTaskSituation }}
    >
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);

  return context;
}

export { TasksProvider, useTasks };
