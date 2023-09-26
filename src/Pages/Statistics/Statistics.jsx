/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, Cell } from "recharts";

const Statistics = () => {
  const donates = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../../../public/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const data = [
    { name: "Group A", value: categories.length },
    { name: "Group B", value: donates.length },
  ];
  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="pt-36">
      <div>
        <div className="flex items-center justify-center">
          <PieChart width={300} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="md:flex items-center justify-center text-center text-lg gap-5">
          <p className="md:py-0 my-3">Your Donation</p>
          <span className="bg-[#00C49F] py-2 px-14 rounded md:mr-10"></span>

          <p className="md:py-0 my-3">Total Donation</p>
          <span className="bg-[#FF444A] py-2 px-14 rounded"></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
