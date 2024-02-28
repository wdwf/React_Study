import React, { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Texto</h2>
      <Panel
        title='About'
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, veritatis
        numquam saepe, mollitia a ut dolore magni doloribus illo, quos
        necessitatibus. Reiciendis debitis vel dolorum soluta aperiam doloremque
        ducimus accusantium!
      </Panel>
      <Panel
        title='Etymology'
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit rerum
        tempore repellat, quidem maxime repudiandae recusandae exercitationem
        sit ipsum? Veniam odit est id corporis mollitia ullam excepturi, fugiat
        sit delectus.
      </Panel>
    </>
  );
}

