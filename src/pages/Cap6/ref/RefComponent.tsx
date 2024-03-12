import React, { useRef, useState } from "react";

export default function RefComponent() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | undefined>();

  const inputRef = useRef<any>();

  function handleGetRefValue() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  /*
    useRef retorna um objeto como: 
    useRef(0)
    ||
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

    console.log("antes:", intervalRef.current);

    clearInterval(intervalRef.current);

    console.log("depois", intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    console.log("stop:", intervalRef.current);

    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h2>Tempo: {secondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>Stop</button>
      <br />
      <div>
        <h3>teste de ref</h3>
        <input type='text' ref={inputRef} />
        <button onClick={handleGetRefValue}>Mostrar referencia</button>
      </div>
    </div>
  );
}

