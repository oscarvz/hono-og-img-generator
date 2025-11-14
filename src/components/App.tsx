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

          <Suspense
            fallback={
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="inline-block w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                    Loading your amazing content...
                  </p>
                </div>
              </div>
            }
          >
            <SomeData />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
