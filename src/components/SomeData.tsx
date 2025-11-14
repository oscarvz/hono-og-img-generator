import { use } from "react";

// Simulate api/db call
function fetchSomeData(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Item 1", "Item 2", "Item 3"]);
    }, 2000);
  });
}

export function SomeData() {
  const items = use(fetchSomeData());

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
