import { hc } from "hono/client";
import { useState } from "react";
import type { OgRoute, OpenGraphImageProps } from "..";

const client = hc<OgRoute>("/og");

export function ImageGenerator() {
  const [serverName, setServerName] = useState("");
  const [grade, setGrade] = useState<OpenGraphImageProps["grade"]>("A+");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await client.index.$post({
        json: {
          serverName,
          grade,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } else {
        setError("Failed to generate image");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Generate Open Graph Image
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="serverName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Server Name
            </label>
            <input
              type="text"
              id="serverName"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter server name"
            />
          </div>

          <div>
            <label
              htmlFor="grade"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Grade
            </label>
            <select
              id="grade"
              value={grade}
              onChange={(e) =>
                setGrade(
                  e.target.value as "A+" | "A-" | "B+" | "B-" | "C+" | "C-",
                )
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C-">C-</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading || !serverName}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {imageUrl && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Generated Image:
            </h3>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt="Generated Open Graph"
                className="w-full"
              />
            </div>
            <a
              href={imageUrl}
              download={`${serverName}-${grade}.webp`}
              className="inline-block mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
