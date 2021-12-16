import React from "react";

import { ChartView } from "./ChartView";

export const ReactQueryDemo: React.FunctionComponent = () => {
  const [view, setView] = React.useState<"charts" | "other">("charts");

  return (
    <div>
      <div className="border-b border-r-gray-400 px-2 py-4">
        <h1>React Query Demo</h1>
      </div>

      <div className="px-10 space-x-2">
        <button
          className={`h-8 px-6 mt-5 text-xs font-semibold rounded-md border-gray-300 text-gray-900 ${
            view === "charts" ? "border-2 border-gray-600" : "border"
          }`}
          type="button"
          onClick={() => setView("charts")}
        >
          Charts view
        </button>

        <button
          className={`h-8 px-6 mt-5 text-xs font-semibold rounded-md border-gray-300 text-gray-900 ${
            view === "other" ? "border-2 border-gray-600" : "border"
          }`}
          type="button"
          onClick={() => setView("other")}
        >
          Other view
        </button>
      </div>

      {view === "charts" ? (
        <ChartView />
      ) : (
        <div className="m-10 my-5 font-semibold text-sm">Other view</div>
      )}
    </div>
  );
};
