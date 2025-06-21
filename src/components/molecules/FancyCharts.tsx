import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

const timeRanges = [
  "7 Days",
  "14 Days",
  "30 Days",
  "3 Months",
  "1 Year",
  "Max",
];

const filterDataByRange = (data: any, range: any) => {
  if (range === "Max") return data;

  const daysMap: any = {
    "7 Days": 7,
    "14 Days": 14,
    "30 Days": 30,
    "3 Months": 90,
    "1 Year": 365,
  };
  const days = daysMap[range];
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return data.filter((d: any) => new Date(d.date) >= cutoff);
};

const LineChartCard = ({ title, yLabel, data, color, loading }: any) => {
  if (loading) {
    return <ChartSkeleton />;
  }

  const [range, setRange] = useState("3 Months");

  const filteredData = filterDataByRange(data, range);

  const option = {
    backgroundColor: "#0a1225",
    tooltip: { trigger: "axis" },
    grid: { left: 50, right: 20, bottom: 80, top: 40 },
    dataZoom: [
      { type: "slider", start: 80, end: 100, bottom: 10 },
      { type: "inside" },
    ],
    xAxis: {
      type: "time",
      axisLabel: { color: "#aaa" },
      splitLine: { show: false },
    },
    yAxis: {
      type: "value",
      name: yLabel,
      axisLabel: { color: "#aaa" },
      splitLine: { lineStyle: { color: "#1f2a40" } },
    },
    series: [
      {
        name: yLabel,
        type: "line",
        smooth: true,
        showSymbol: false,
        lineStyle: { color, width: 2 },
        data: filteredData.map((d: any) => [d.date, d.value]),
        areaStyle: {
          opacity: 0.1,
          color,
        },
      },
    ],
  };

  return (
    <div className="bg-[#0a1225] rounded-2xl p-4 shadow border border-[#1c2940]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold text-md">{title}</h3>
        <div className="flex space-x-2">
          {timeRanges.map((t) => (
            <button
              key={t}
              onClick={() => setRange(t)}
              className={`text-xs px-3 py-1 rounded-full ${
                range === t
                  ? "bg-white text-black"
                  : "bg-[#1f2a40] text-white hover:bg-[#2a3c5b]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <ReactECharts
        option={option}
        style={{ height: "300px", width: "100%" }}
      />
    </div>
  );
};

export default function FancyCharts({ loading }: any) {
  const addressData = Array.from({ length: 120 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (120 - i));
    return {
      date: date.toISOString().split("T")[0],
      value: Math.floor(100000 + Math.random() * 2000000),
    };
  });

  const contractsData = Array.from({ length: 120 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (120 - i));
    return {
      date: date.toISOString().split("T")[0],
      value: 17000000 + i * 120000, // cumulative growth
    };
  });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
      <LineChartCard
        title="Active Addresses"
        yLabel="Addresses"
        data={addressData}
        color="#42a5f5"
        loading={loading}
      />
      <LineChartCard
        title="Contracts"
        yLabel="Contracts"
        data={contractsData}
        color="#4ade80"
        loading={loading}
      />
    </div>
  );
}

const ChartSkeleton = () => {
  return (
    <div className="bg-[#0a1225] rounded-2xl p-4 shadow border border-[#1c2940] animate-pulse h-[360px] w-full">
      <div className="h-6 bg-[#1c2940] rounded w-1/3 mb-4"></div>
      <div className="h-[240px] bg-[#1c2940] rounded mb-4"></div>
      <div className="h-4 bg-[#1c2940] rounded w-full"></div>
    </div>
  );
};
