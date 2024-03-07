import React, { ReactNode, createContext, useContext, useReducer } from "react";
import { taskReducerEx, taskReducerProps } from "./TaskReducerEx";

type TasksDispatchContextProps = {
  handleAddTask: (text: string) => void;
  handleChangeTask: (task: taskReducerProps) => void;
  handleDeleteTask: (id: number) => void;
  tasks: taskReducerProps[];
  nextId: number;
};

export const TasksDispatchContext = createContext(
  {} as TasksDispatchContextProps
);

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: false },
  { id: 1, text: "Visit the temple", done: true },
  { id: 2, text: "Drink matcha", done: false },
];

export const TasksDispatchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [tasks, dispatch] = useReducer(taskReducerEx, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: taskReducerProps) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <TasksDispatchContext.Provider
      value={{
        handleAddTask,
        handleChangeTask,
        handleDeleteTask,
        tasks,
        nextId,
      }}
    >
      {children}
    </TasksDispatchContext.Provider>
  );
};

export const useTasksDispatch = () => useContext(TasksDispatchContext);

