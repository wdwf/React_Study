import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { taskReducerProps } from "./TaskReducerEx";
import { useTasksDispatch } from "./TaskContextEx";

export default function TaskListEx() {
  const { tasks } = useTasksDispatch();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}

