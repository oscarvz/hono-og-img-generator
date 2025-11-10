export function OpenGraphCard() {
  return (
    // *cries in CSS* we somehow have to add a flex container. Grid is boo apparently.
    <div style={{ display: "flex" }}>
      <h1>I'm a title wow.</h1>
      <p>Descriptions are here to do awesome stuff.</p>
    </div>
  );
}
