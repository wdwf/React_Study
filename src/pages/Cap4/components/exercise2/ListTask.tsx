import React from "react";
import Task from "./Task";
import { todoProps } from "../..";

type ListProps = {
  list: { id: number; title: string; done: boolean }[];
  handleRemoveTodo: (removeTodoId: number) => void;
  handleEditTodo: (nextTodo: todoProps) => void;
};

export default function ListTask({
  list,
  handleEditTodo,
  handleRemoveTodo,
}: ListProps) {
  return (
    <ul>
      {list.map((todo) => (
        <Task
          theTask={todo}
          key={todo.id}
          onChange={handleEditTodo}
          onRemove={handleRemoveTodo}
        />
      ))}
    </ul>
  );
}

