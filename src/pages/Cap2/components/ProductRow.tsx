import React from "react";

export type TypeProduct = {
    price: string;
    stocked: boolean;
    name: string;
    category: string;
}


export default function ProductRow({ product }: {product: TypeProduct}) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
