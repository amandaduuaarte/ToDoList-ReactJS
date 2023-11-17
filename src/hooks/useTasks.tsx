/* eslint-disable @typescript-eslint/no-explicit-any */
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
  doneList: number;
  removeTask: (idTask: string) => void;
  createTask: (data: TasksData) => void;
  getAllTasks: () => void;
  handleTaskSituation: (idTask: string) => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TaskContextProps>({} as TaskContextProps);

function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TasksData[]>([]);
  const [doneList, setDoneList] = useState<number>(0);

  const getAllDoneTasks = useCallback(() => {
    const storedData = JSON.parse(localStorage.getItem("data") || "[]");
    storedData.tasks = storedData.tasks.filter(
      (task: TasksData) => task.isDone === true
    );
    setDoneList(storedData.tasks.length);
  }, []);
  const getAllTasks = useCallback((): void => {
    if (localStorage.data) {
      const items = JSON.parse(localStorage.data || []);

      if (items) {
        setTasks(items.tasks);
      }
      getAllDoneTasks();
    }
  }, [getAllDoneTasks]);

  const createTask = (data: TasksData): void => {
    let storedData = JSON.parse(localStorage.getItem("data") || "[]");

    if (!storedData.tasks) {
      localStorage.setItem("data", JSON.stringify({ tasks: [] }));
      storedData = JSON.parse(localStorage.getItem("data") || "[]");
    }

    storedData.tasks.push(data);
    localStorage.setItem("data", JSON.stringify(storedData));

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
    const updatedTasks = storedData.tasks.map((task: TasksData) => {
      if (task.id === idTask) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });

    storedData.tasks = updatedTasks;

    localStorage.setItem("data", JSON.stringify(storedData));
    getAllTasks();
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        doneList,
        createTask,
        removeTask,
        handleTaskSituation,
        getAllTasks,
      }}
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
