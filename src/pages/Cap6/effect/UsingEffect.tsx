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
    if (isPlaying) {
      refPlayer.current.play();
    } else {
      refPlayer.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <button onClick={handleAdd}>{t}</button>
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

