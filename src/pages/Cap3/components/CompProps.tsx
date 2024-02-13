import React from 'react'

export default function CompProps({ title, children }: {title: string, children: React.ReactNode}) {
  return (
    <div>
      <h6>{title}</h6>
      {children}
    </div>
  )
}
