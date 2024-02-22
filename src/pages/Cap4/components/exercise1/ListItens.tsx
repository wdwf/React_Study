import { useState } from "react";
import Item from "./Item";

type listProps = {
  id: number;
  name: string;
  qty: number;
};

const initialList = [
  { id: 1, name: "ProdutoA", qty: 4 },
  { id: 2, name: "ProdutoB", qty: 2 },
  { id: 3, name: "ProdutoC", qty: 5 },
];

export default function ListItens() {
  const [listItens, setListItens] = useState(initialList);

  function handleAddItem(itemId: number) {
    setListItens(
      listItens.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleRemoveItem(itemId: number) {
    const nextList = listItens.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      } else {
        return item;
      }
    });
    setListItens(
      nextList.filter((item) => {
        return item.qty > 0;
      })
    );
  }

  return (
    <ul>
      {listItens.map((item) => (
        <Item
          name={item.name}
          qty={item.qty}
          id={item.id}
          add={handleAddItem}
          remove={handleRemoveItem}
          key={item.id}
        />
      ))}
    </ul>
  );
}

