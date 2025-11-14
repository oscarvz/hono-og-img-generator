import { Suspense } from "react";
import { Script, ViteClient } from "vite-ssr-components/react";
import { SomeData } from "./SomeData";

export function App() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Open Graph Image</title>
        <Script src="/src/client.tsx" />
        <link rel="stylesheet" href="/src/style.css" />
        <ViteClient />
      </head>
      <body>
        <div>
          <h1>Ella's Mega Chomp Project</h1>

          <Suspense fallback={<div>Loading...</div>}>
            <SomeData />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
