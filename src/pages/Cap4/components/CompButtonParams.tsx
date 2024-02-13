import React from 'react'

export default function CompButtonParams({ onFunc }: {onFunc: (txt: string) => void}) {
  return (
    <button onClick={() => onFunc("jovem")}>
      Teste
    </button>
  )
}
