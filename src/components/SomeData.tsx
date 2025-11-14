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
    <div className="w-full max-w-2xl mx-auto">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={item}
            className="group relative overflow-hidden rounded-xl bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200/50 dark:border-blue-800/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {item}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-6 h-6 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Chevron Right</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </li>
        ))}
      </ul>
    </div>
  );
}
