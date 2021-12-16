import dayjs, { Dayjs } from "dayjs";

type Filter = {
  filter1?: string;
  filter2?: string;
};

const lastCheckedAt: Record<string, Dayjs> = {};

export const sleep = async (ms = 2000) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

// Returns 200 once after every 30 seconds otherwise 429.
export const getStatus = (id: string) => {
  let last = lastCheckedAt[id];
  if (!last) {
    last = dayjs(new Date());
    lastCheckedAt[id] = last;
  }

  const current = dayjs(new Date());
  const diff = current.diff(last, "s");

  console.log(
    `last - ${last.format("hh:mm:ss")}, current - ${current.format(
      "hh:mm:ss"
    )}, diff - ${diff}`
  );

  if (diff < 25) {
    return 429;
  }

  lastCheckedAt[id] = dayjs(new Date());
  return 200;
};

const series = [1, 2, 3, 4, 5, 6];
const multiplier = [0.2, 0.5, 0.4, 0.7, 0.8, 0.3];

export const getGraphData = (id: number, filter: Filter) => {
  return series.map((val, idx) => ({
    name: `sku-${id}-${filter.filter1 || "f"}-${val}`,
    value: val * id * multiplier[idx] * Number(filter.filter2 || 1),
  }));
};
