interface SomeDataProps {
  items: string[];
}

export function SomeData({ items }: SomeDataProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
