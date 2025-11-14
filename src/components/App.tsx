import { Suspense, use, useState } from "react";
import { SomeData } from "./SomeData";

function fetchSomeData(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Item 1", "Item 2", "Item 3"]);
    }, 4000);
  });
}

export function App() {
  const [count, setCount] = useState(0);

  const items = use(fetchSomeData());

  return (
    <div>
      <h1>Hello Cruel World</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Count: {count}</p>

      <Suspense fallback={<div>Loading...</div>}>
        <SomeData items={items} />
      </Suspense>
    </div>
  );
}
