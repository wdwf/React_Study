import React from "react";

export default function Item({
  name,
  qty,
  id,
  add,
  remove,
}: {
  name: string;
  qty: number;
  id: number;
  add: (itemId: number) => void;
  remove: (itemId: number) => void;
}) {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        margin: "10px 0px",
      }}
    >
      <p>{name}</p>
      <p>{qty}</p>
      <button onClick={() => add(id)}>Add +1</button>
      <button onClick={() => remove(id)}>Remove -1</button>
    </li>
  );
}

