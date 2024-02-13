import React from 'react'

export default function CompImpuro() {
  let valor = 1;

  valor = valor * 10;
  return (
    <div>Componente impuro pois houve alteração de valor {valor}</div>
  )
}
