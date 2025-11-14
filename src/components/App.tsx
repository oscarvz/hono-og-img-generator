import { Script, ViteClient } from "vite-ssr-components/react";
import { ImageGenerator } from "./ImageGenerator";

export function App() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Open Graph Image</title>
        <Script src="/src/client.tsx" />
        <ViteClient />
      </head>
      <body className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-[fadeIn_0.6s_ease-in]">
              Ella's Mega Chomp Project
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A delightful list of amazing items
            </p>
          </div>

          <ImageGenerator />
        </div>
      </body>
    </html>
  );
}
