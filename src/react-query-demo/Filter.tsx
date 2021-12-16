import React from "react";

import type { Filter as FilterType } from "./useFetchGraphData";

type Props = {
  onApplyFilter: (filter: FilterType) => void;
};

export const Filter: React.FunctionComponent<Props> = ({
  onApplyFilter: onFilterChange,
}) => {
  const [filter, setFilter] = React.useState<FilterType>({
    filter1: "",
    filter2: "",
  });

  const handleTextChange = React.useCallback((e) => {
    const { id, value } = e.currentTarget;

    setFilter((filter) => ({
      ...filter,
      [id]: value,
    }));
  }, []);

  const handleApplyFilter = React.useCallback(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  return (
    <div className="w-full h-filter border border-gray-200 rounded">
      <div className="border-b border-gray-200 px-4 py-2">
        <span className="text-sm font-semibold">Filter</span>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <div>
            <label className="block text-xs font-bold mb-1">Filter one</label>
          </div>
          <div>
            <input
              id="filter1"
              className="appearance-none text-sm border border-gray-200 rounded w-full p-2
                text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Enter d1 or q1"
              value={filter.filter1}
              onChange={handleTextChange}
            />
          </div>
        </div>

        <div className="mb-6">
          <div>
            <label className="block text-xs font-bold mb-1">Filter two</label>
          </div>
          <div>
            <input
              id="filter2"
              className="appearance-none border border-gray-200 rounded w-full p-2 text-sm
                text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              placeholder="Enter 1 to 10"
              value={filter.filter2}
              onChange={handleTextChange}
            />
          </div>
        </div>

        <div className="text-right">
          <button
            className="px-6 py-2 text-sm font-semibold rounded-md bg-purple-600 text-white hover:bg-purple-700"
            type="button"
            onClick={handleApplyFilter}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
