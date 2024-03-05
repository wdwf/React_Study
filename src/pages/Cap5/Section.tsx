import { ReactNode } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({
  level,
  children,
}: {
  level: number;
  children: ReactNode;
}) {
  return (
    <section className='section'>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
