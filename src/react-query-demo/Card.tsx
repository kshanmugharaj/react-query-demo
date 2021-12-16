import React, { useMemo } from "react";
import { LineChart } from "~/components/line-chart";

import { useFetchGraphData } from "./useFetchGraphData";
import type { Filter } from "./useFetchGraphData";

type Props = {
  id: number;
  filter?: Filter;
};

export const Card: React.FunctionComponent<Props> = ({ id, filter }) => {
  const params = {
    id,
    filter,
  };

  const {
    isLoading,
    error,
    data: graphData,
    refetch,
  } = useFetchGraphData(params);

  const handleRefetch = React.useCallback(() => refetch(), [refetch]);

  const content = useMemo(() => {
    if (isLoading) {
      return <div>loading....</div>;
    }

    if (error) {
      return (
        <div className="flex flex-col justify-center items-center">
          <div className="text-red-500 font-semibold">{error.message}</div>

          <button
            className="h-8 px-6 mt-5 text-sm font-semibold rounded-md border border-gray-300 text-gray-900"
            type="button"
            onClick={handleRefetch}
          >
            Refetch data
          </button>
        </div>
      );
    }

    if (graphData) {
      return (
        <div className="my-5">
          <LineChart data={graphData} />
        </div>
      );
    }

    return <div>No Data</div>;
  }, [error, graphData, handleRefetch, isLoading]);

  return (
    <div
      className="min-w-graph h-graph border rounded border-r-gray-300 bg-gray-50 
      flex flex-col justify-center items-center text-sm"
    >
      {content}
    </div>
  );
};
