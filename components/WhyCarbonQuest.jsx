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
  BarChart,
  Bar,
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
  { name: "Transport", value: 30, color: "#c3ea65" },
  { name: "Home Energy", value: 25, color: "#9bcc33" },
  { name: "Food", value: 20, color: "#73ae00" },
  { name: "Shopping", value: 15, color: "#4b9000" },
  { name: "Others", value: 10, color: "#236f00" },
];

const insights = [
  {
    icon: Car03Icon,
    title: "Transportation",
    description:
      "Switch to electric vehicles or use public transport to reduce emissions.",
    details:
      "Transportation accounts for a significant portion of individual carbon footprints. By choosing electric vehicles, carpooling, or using public transport, you can dramatically reduce your emissions.",
    potentialSavings: [
      { name: "Bike", savings: 2.5 },
      { name: "Public Transport", savings: 1.2 },
      { name: "Car", savings: 0.1 },
    ],
  },
  {
    icon: Home05Icon,
    title: "Home Energy",
    description:
      "Improve insulation and use energy-efficient appliances to lower your carbon footprint.",
    details:
      "Your home's energy consumption plays a crucial role in your overall carbon footprint. Upgrading to energy-efficient appliances and improving insulation can lead to substantial reductions in energy use and emissions.",
    potentialSavings: [
      { name: "Insulation", savings: 1.8 },
      { name: "Efficient Appliances", savings: 1.5 },
      { name: "Solar Panels", savings: 2.2 },
    ],
  },
  {
    icon: Recycle01Icon,
    title: "Waste Management",
    description:
      "Implement recycling and composting to minimize landfill waste.",
    details:
      "Proper waste management through recycling and composting can significantly reduce methane emissions from landfills. It also conserves resources and energy that would be used in producing new products.",
    potentialSavings: [
      { name: "Recycling", savings: 0.9 },
      { name: "Composting", savings: 0.7 },
      { name: "Reducing", savings: 1.1 },
    ],
  },
  {
    icon: ShoppingCartFavorite01Icon,
    title: "Conscious Shopping",
    description:
      "Choose eco-friendly products and reduce unnecessary purchases.",
    details:
      "Every product we buy has a carbon footprint from its production and transportation. By choosing eco-friendly products and reducing overall consumption, we can significantly lower our indirect carbon emissions.",
    potentialSavings: [
      { name: "Eco-products", savings: 1.3 },
      { name: "Second-hand", savings: 1.6 },
      { name: "Minimalism", savings: 1.8 },
    ],
  },
];

export default function WhyCarbonQuest() {
  const [activeInsight, setActiveInsight] = useState(0);

  return (
    <section className="mt-10 max-w-[70rem] mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-playfair font-medium">Why CarbonQuest?</h1>
        <p className="mt-2">Here&apos;s you should believe in us!</p>
      </div>

      {/* Personalized Carbon Insights */}
      <div className="my-10">
        <h1 className="text-2xl text-center font-semibold">
          Personalized Carbon Insights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 mx-6">
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
            That&apos;s equivalent to planting 53 tress or taking 0.7 cars off the
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {insights.map((insight, index) => (
              <div
                key={insight.title}
                className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-colors ${
                  activeInsight === index
                    ? "bg-accent-400"
                    : "hover:bg-neutral-200"
                }`}
                onClick={() => setActiveInsight(index)}
              >
                <insight.icon className="h-12 w-12 mb-2 text-gray-700" />
                <span className="text-center font-semibold text-gray-800">
                  {insight.title}
                </span>
              </div>
            ))}
          </div>
          <div key={activeInsight} className="border-t p-6">
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">
              {insights[activeInsight].title}
            </h4>
            <p className="text-gray-700 mb-4">
              {insights[activeInsight].description}
            </p>
            <p className="text-gray-600 mb-16">
              {insights[activeInsight].details}
            </p>
            <h5 className="font-semibold mb-4 text-gray-800">
              Potential CO₂ Savings (tons/year)
            </h5>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={insights[activeInsight].potentialSavings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="savings" fill="#c3ea65" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
