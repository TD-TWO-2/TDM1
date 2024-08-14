import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Category 1",
    Asian: 4000,
    Black: 2400,
    Hispanic: 2400,
    White: 1200,
  },
  {
    name: "Category 2",
    Asian: 3000,
    Black: 1398,
    Hispanic: 2210,
    White: 4000,
  },
  {
    name: "Category 3",
    Asian: 2000,
    Black: 9800,
    Hispanic: 2290,
    White: 4000,
  },
  {
    name: "Category 4",
    Asian: 2780,
    Black: 3908,
    Hispanic: 2000,
    White: 4800,
  },
  {
    name: "Category 5",
    Asian: 1890,
    Black: 4800,
    Hispanic: 2181,
    White: 3200,
  },
];

const COLORS = {
  Asian: "#8884d8",
  Black: "#82ca9d",
  Hispanic: "#ffc658",
  White: "#ff8042",
};

const StackedBarChartEmp = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
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
        <Bar dataKey="Asian" stackId="a" fill={COLORS.Asian} />
        <Bar dataKey="Black" stackId="a" fill={COLORS.Black} />
        <Bar dataKey="Hispanic" stackId="a" fill={COLORS.Hispanic} />
        <Bar dataKey="White" stackId="a" fill={COLORS.White} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChartEmp;
