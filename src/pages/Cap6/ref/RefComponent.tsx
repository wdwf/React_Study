import React, { useRef, useState } from "react";

export default function RefComponent() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const ref = useRef(0);
  /*
    useRef retorna um objeto como: 
    {
      current: 0
    }

    ref.current -> retorna o valor atual
  */

  // function handleClick() {
  //   ref.current = ref.current + 1;
  //   alert(`voce clicou ${ref.current} vezes!`);
  // }

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h2>Tempo: {secondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart}>start</button>
    </div>
  );
}

