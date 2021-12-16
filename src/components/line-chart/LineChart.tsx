import React from "react";
import {
  LineChart as BaseLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type Data = Array<{
  name: string;
  value: number;
}>;

type Props = {
  data: Data;
  width?: number;
  height?: number;
};

export const LineChart: React.FunctionComponent<Props> = ({
  data,
  height = 250,
  width = 500,
}) => {
  return (
    <BaseLineChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </BaseLineChart>
  );
};
