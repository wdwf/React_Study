import React, { useReducer, useState } from "react";
import TaskAdd from "./TaskAdd";
import { taskReducerEx } from "./TaskReducerEx";
import TaskList from "../reducer/TaskList";
import TaskListEx from "./TaskListEx";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Philosopher’s Path" },
  { id: 1, text: "Visit the temple" },
  { id: 2, text: "Drink matcha" },
];

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducerEx, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: string) {
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
    <div>
      <h2>Lista de tarefas</h2>
      <TaskAdd onAddTask={handleAddTask} />
      <TaskListEx />
    </div>
  );
}

