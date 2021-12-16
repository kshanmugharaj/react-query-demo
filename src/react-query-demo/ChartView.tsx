import React from "react";

import { Card } from "./Card";
import { Filter } from "./Filter";
import type { Filter as FilterType } from "./useFetchGraphData";

export const ChartView: React.FunctionComponent = () => {
  const [filter, setFilter] = React.useState<FilterType>({
    filter1: "",
    filter2: "",
  });

  return (
    <>
      <h2 className="mx-10 my-5 font-semibold text-sm">Charts view</h2>
      <div className="mx-10 flex space-x-5">
        <div className="flex space-x-5">
          <Card id={100} filter={filter} />
          <Card id={200} filter={filter} />
        </div>

        <Filter onApplyFilter={setFilter} />
      </div>
    </>
  );
};
