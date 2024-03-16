import React, { useEffect, useRef, useState } from "react";

export default function UsingEffect({
  src,
  isPlaying,
}: {
  src: string;
  isPlaying: boolean;
}) {
  const refPlayer = useRef<any>(null);
  const [t, setT] = useState(0);

  function handleAdd() {
    setT(t + 1);
  }

  useEffect(() => {
    console.log("entrando...", t);

    return () => {
      console.log("saindo...", t);
    };
  }, [t]);

  // useEffect(() => {
  //   console.log("entrando...", isPlaying);

  //   if (isPlaying) {
  //     refPlayer.current.play();
  //   } else {
  //     refPlayer.current.pause();
  //   }

  //   return () => {
  //     console.log("saindo...", isPlaying);
  //   };
  // }, [isPlaying]);

  return (
    <div>
      <button onClick={handleAdd}>{t} VALOR</button>
      <video
        style={{ width: "300px" }}
        src={src}
        loop
        playsInline
        ref={refPlayer}
      ></video>
    </div>
  );
}

