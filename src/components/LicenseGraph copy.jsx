import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Windows10",
    stock: 30,
    used: 31,
  },
  {
    name: "office2019",
    stock: 30,
    used: 35,
  },
  {
    name: "office2016",
    stock: 10,
    used: 5,
  },
  {
    name: "한글2020",
    stock: 3,
    used: 3,
  },
  {
    name: "Photoshop CC",
    stock: 1,
    used: 3,
  },
  {
    name: "알약",
    stock: 10,
    used: 5,
  },
];
const LicenseGraph = () => {
  return (
    <div id="Container" className="flex w-full h-full container">
      <div className="flex w-full p-4 flex-col container">
        <div className="flex h-full w-full justify-center items-center bg-gray-900 rounded-md shadow-md p-5 box-border flex-col container">
          <div className="flex justify-start items-center w-full mb-5">
            <h1 className="text-sm font-semibold text-gray-100">
              소프트웨어 현황
            </h1>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={280}
              data={data}
              margin={{ top: 10 }}
              barGap={15}
            >
              <XAxis dataKey="name" style={{ fontSize: "13px" }} />
              <Legend
                iconSize={5}
                iconType={"circle"}
                style={{ fontSize: "10px" }}
              />
              <Bar
                dataKey="stock"
                fill="#fce2c1"
                barSize={5}
                label={{
                  fontSize: "13px",
                  fill: "#ffffff",
                  position: "top",
                }}
              />
              <Bar
                dataKey="used"
                fill="#d2d2f1"
                barSize={5}
                label={{
                  fontSize: "13px",
                  fill: "#ffffff",
                  position: "top",
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LicenseGraph;
