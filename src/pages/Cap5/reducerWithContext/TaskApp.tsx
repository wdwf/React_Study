import React, { useReducer, useState } from "react";
import TaskAdd from "./TaskAdd";
import { taskReducerEx, taskReducerProps } from "./TaskReducerEx";
import TaskList from "../reducer/TaskList";
import TaskListEx from "./TaskListEx";

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Philosopher’s Path", done: false },
//   { id: 1, text: "Visit the temple", done: true },
//   { id: 2, text: "Drink matcha", done: false },
// ];

export default function TaskApp() {
  // const [tasks, dispatch] = useReducer(taskReducerEx, initialTasks);

  return (
    <div>
      <h2>Lista de tarefas</h2>
      <TaskAdd />
      <TaskListEx />
    </div>
  );
}

