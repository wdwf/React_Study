import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { taskReducerProps } from "./TaskReducerEx";

export default function TaskListEx({
  tasks,
}: {
  tasks: taskReducerProps[];
  onChangeTask: () => void;
  onDeleteTask: () => void;
}) {
  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem task={task} />;
      })}
    </div>
  );
}

