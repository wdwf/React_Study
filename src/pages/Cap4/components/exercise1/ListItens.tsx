import { useReducer, useState } from "react";
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
const initialList1 = { id: 1, name: "ProdutoA", qty: 4 };

export default function ListItens() {
  const [listItens, setListItens] = useState(initialList);

  function handleAddItem(itemId: number) {
    console.log(listItens);

    //não fazer assim!!!
    // listItens.qty++;
    // setListItens({ ...listItens });

    //fazer assim!!!
    // setListItens({ ...listItens, qty: listItens.qty + 1 });

    // setListItens((prev) => {
    //   const index = listItens.findIndex((element) => {
    //     return itemId === element.id;
    //   });
    //   return [
    //     ...prev.slice(0, index),
    //     { ...prev[index], qty: prev[index].qty + 1 },
    //     ...prev.slice(index + 1),
    //   ];
    // });

    // setListItens(
    //   listItens.map((item) => {
    //     if (item.id === itemId) {
    //       return {
    //         ...item,
    //         qty: item.qty + 1,
    //       };
    //     } else {
    //       return item;
    //     }
    //   })
    // );
    setListItens(
      listItens.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }

        return item;
      })
    );
  }

  function handleRemoveItem(itemId: number) {
    // const nextList = listItens.map((item) => {
    //   if (item.id === itemId) {
    //     return {
    //       ...item,
    //       qty: item.qty - 1,
    //     };
    //   } else {
    //     return item;
    //   }
    // });
    // setListItens(
    //   nextList.filter((item) => {
    //     return item.qty > 0;
    //   })
    // );

    // setListItens();

    const newListItens = [...listItens];
    const index = newListItens.findIndex((element) => {
      return itemId === element.id;
    });

    if (newListItens[index].qty === 1) {
      newListItens.splice(index, 1);
    } else {
      newListItens[index].qty--;
    }

    setListItens(newListItens);
  }

  return (
    <ul>
      {/* {listItens.map((item) => (
        <Item
          name={item.name}
          qty={item.qty}
          id={item.id}
          add={handleAddItem}
          remove={handleRemoveItem}
          key={item.id}
        />
      ))} */}

      {listItens.map((item) => {
        // const item = listItens[key];
        return (
          <Item
            name={item.name}
            qty={item.qty}
            id={item.id}
            add={handleAddItem}
            remove={handleRemoveItem}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

