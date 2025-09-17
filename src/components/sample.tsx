import { useState } from "react";

export function Sample() {
  const [count, setCount] = useState(0)

  function handleCount() {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <button onClick={handleCount}>{count}</button>
    </div>
  )
}
