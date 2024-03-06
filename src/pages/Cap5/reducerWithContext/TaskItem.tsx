import React from "react";

export default function TaskItem({
  task,
}: {
  task: { id: number; text: string };
}) {
  return <li key={task.id}>{task.text}</li>;
}

