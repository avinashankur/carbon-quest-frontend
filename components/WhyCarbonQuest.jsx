"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  TradeDownIcon,
  Car03Icon,
  Home05Icon,
  Recycle01Icon,
  ShoppingCartFavorite01Icon,
} from "hugeicons-react";

const lineData = [
  { name: "Jan", Carbon: 4000 },
  { name: "Feb", Carbon: 3800 },
  { name: "Mar", Carbon: 3500 },
  { name: "Apr", Carbon: 3200 },
  { name: "May", Carbon: 3000 },
  { name: "Jun", Carbon: 2800 },
];

const pieData = [
  { name: "Car03Icon", value: 30, color: "#c3ea65" },
  { name: "Home Energy", value: 25, color: "#9bcc33" },
  { name: "Food", value: 20, color: "#73ae00" },
  { name: "Shopping", value: 15, color: "#4b9000" },
  { name: "Others", value: 10, color: "#236f00" },
];

const insights = [
  {
    icon: Car03Icon,
    title: "Transoportation",
    desc: "Switch to electricl vehicles or use public transort to reduce emissions.",
  },
  {
    icon: Home05Icon,
    title: "Home Energy",
    desc: "Switch to renewable energy sources and improve insulation to reduce your carbon footprint.",
  },
  {
    icon: Recycle01Icon,
    title: "Waste Management",
    desc: "Implement recycling and composting to minimize landfill waste.",
  },
  {
    icon: ShoppingCartFavorite01Icon,
    title: "Conscious Shopping",
    desc: "Choose eco-friendly products and reuce unnecessary purchases.",
  },
];

export default function WhyCarbonQuest() {
  const [activeInsight, setActiveInsight] = useState(0);

  return (
    <section className="mt-10 max-w-[70rem] mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-playfair font-medium">Why CarbonQuest?</h1>
        <p className="mt-2">Here's why people believe in us!</p>
      </div>

      {/* Personalized Carbon Insights */}
      <div className="my-10">
        <h1 className="text-2xl text-center font-semibold">
          Personalized Carbon Insights
        </h1>
        <div className="grid grid-cols-2 gap-5 mt-4 mx-6">
          <div className="bg-neutral-100 border shadow rounded-2xl p-10">
            <h2 className="text-xl mb-5 font-semibold">
              Your Carbon Footprint
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="Carbon"
                  stroke="#4b9000"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-center mt-2 text-xs">
              Your Carbon Footprint is decreasing, keep up the good work!
            </p>
          </div>
          <div className="bg-neutral-100 border shadow rounded-2xl p-10">
            <h2 className="text-xl mb-5 font-semibold">
              Carbon Impact Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-accent-400 shadow border border-accent-500 py-10 px-4 rounded-xl text-center mx-6 mt-5">
          <h2 className="text-xl font-semibold flex gap-5 items-center justify-center">
            <TradeDownIcon size={50} className="text-accent-700" />
            3.2 tons CO2 saved this year
          </h2>
          <p>
            That's equivalent to planting 53 tress or taking 0.7 cars off the
            road for a year!
          </p>
        </div>
      </div>

      {/* Interactive Visualizations */}
      <div className="mt-[10rem]">
        <h1 className="text-2xl font-semibold text-center">
          Interactive Visualizations
        </h1>
        <div className="bg-neutral-100 border rounded-2xl px-4 py-8 mx-6 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 flex flex-col items-center cursor-pointer transition duration-200 ${
                  activeInsight === index ? "bg-accent-400 hover:bg-accent-400" : "hover:bg-neutral-200"
                }`}
                onClick={() => setActiveInsight(index)}
              >
                <insight.icon size={40} />
                <h2 className="text-lg font-semibold mb-2">{insight.title}</h2>
              </div>
            ))}
          </div>
          <div key={activeInsight} className="px-20 py-10 bg-neutral-200 rounded-xl mt-8">
            <h2 className="text-xl font-semibold">
              {insights[activeInsight].title}
            </h2>
            <p>{insights[activeInsight].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}