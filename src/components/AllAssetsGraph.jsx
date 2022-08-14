import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "데스크탑", count: 15 },
  { name: "모니터", count: 35 },
  { name: "노트북", count: 18 },
  { name: "태블릿", count: 10 },
  { name: "프린터", count: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8819c9"];
const AllAssetsGraph = () => {
  return (
    <div id="Container" className="flex w-full h-full ">
      <div className="flex w-full p-4 flex-col">
        <div className="flex h-full w-full justify-center items-center bg-white rounded-md shadow-md p-5 box-border flex-col">
          <div className="flex justify-start items-center w-full mb-5 ">
            <h1 className="text-sm font-semibold text-gray-700">전체자산</h1>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={80} height={80}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="count"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                iconSize={5}
                iconType={"circle"}
                align={"right"}
                verticalAlign="middle"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AllAssetsGraph;
