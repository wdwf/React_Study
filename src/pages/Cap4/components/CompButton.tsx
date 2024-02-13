import React from 'react'

export default function CompButton({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}
