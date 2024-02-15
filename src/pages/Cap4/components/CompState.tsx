import React, { useState } from "react";

export default function CompState() {
  const [indexValue, setIndexValue] = useState(10);
  return <div>{indexValue}</div>;
}

