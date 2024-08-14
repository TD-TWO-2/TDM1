import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BarChartEmp = () => {
    const data = [
        { name: 'ethnic group ', europian: 40, african: 24, asian: 24, asianamerican: 40, african1: 24, asian1: 24 },
        // { name: 'African', female: 30, male: 13, amt: 22 },
        // { name: 'Mar', female: 20, male: 98, amt: 22 },
        // { name: 'Apr', female: 27, male: 39, amt: 20 },
        // { name: 'May', female: 18, male: 48, amt: 21 },
        // { name: 'Jun', female: 23, male: 38, amt: 25 },
        // { name: 'Jul', female: 34, male: 43, amt: 21 },
        // { name: 'Aug', female: 45, male: 55, amt: 30 },
      ];
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={500}
          height={200}
          data={data}
          // margin={{
          //   top: 5, right: 30, left: 20, bottom: 5,
          // }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="europian" fill="#8884d8" />
          <Bar dataKey="african" fill="#82ca9d" />
          <Bar dataKey="asian" fill="pink" />
          <Bar dataKey="asian" fill="#82caaa" />
          <Bar dataKey="asian1" fill="#82caaa" />
          <Bar dataKey="african1" fill="#82caaa" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  

export default BarChartEmp
