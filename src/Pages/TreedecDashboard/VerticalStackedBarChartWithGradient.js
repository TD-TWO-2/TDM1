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
  defs,
  linearGradient,
  stop,
} from "recharts";

const data = [
  {
    name: "Asian",
    Asian: 4000,
    
  },
  {
    name: "African",
    Asian: 3000,
  },
  {
    name: "American",
    Asian: 2000,
  },
  {
    name: "Europian",
    Asian: 2780,
  },
  {
    name: "Category 5",
    Asian: 1890,
  },
  {
    name: "Category 5",
    Asian: 1890,
  },
  {
    name: "Category 5",
    Asian: 4000,
  },
  {
    name: "Category 5",
    Asian: 3000,
  },
  {
    name: "Category 5",
    Asian: 1890,
  },
];

const VerticalStackedBarChartWithGradient = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        layout="vertical"
        barSize={10}
        // margin={{
        //   top: 20,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
      >
        <defs>
          <linearGradient id="colorAsian" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff8042" stopOpacity={1} />
            <stop offset="100%" stopColor="#ff0042" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="colorBlack" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#82ca9d" stopOpacity={1} />
            <stop offset="100%" stopColor="#84e1b4" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="colorHispanic" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffc658" stopOpacity={1} />
            <stop offset="100%" stopColor="#ffd980" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="colorWhite" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff8042" stopOpacity={1} />
            <stop offset="100%" stopColor="#ff9c66" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Asian" stackId="a" fill="url(#colorAsian)" />
        <Bar dataKey="Black" stackId="a" fill="url(#colorBlack)" />
        <Bar dataKey="Hispanic" stackId="a" fill="url(#colorHispanic)" />
        <Bar dataKey="White" stackId="a" fill="url(#colorWhite)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VerticalStackedBarChartWithGradient;
