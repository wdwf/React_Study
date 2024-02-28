import React from "react";

type PainelProps = {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
};

export default function Panel({
  title,
  children,
  isActive,
  onShow,
}: PainelProps) {
  return (
    <section className='panel'>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

