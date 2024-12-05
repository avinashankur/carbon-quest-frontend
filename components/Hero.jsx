"use client";
import { Leaf01Icon, ZapIcon, Recycle01Icon } from "hugeicons-react";
import Butt from "./Button";

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-800 overflow-hidden">
      <div className="absolute inset-0 top-[-20rem] z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c3ea65" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#c3ea65" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,1000 C300,800 400,600 500,300 C600,0 800,200 1000,400 L1000,1000 Z"
            fill="url(#gradient)"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 font-playfair leading-[4.5rem] md:leading-normal">
              Discover Your <span className="bg-accent-400 pl-3 pr-36 py-1 rounded-lg">Impact</span>
            </h1>
            <p className="md:text-lg text-gray-600 mb-8">
              Uncover your carbon footprint and join a community committed to
              creating a sustainable future.
            </p>
            <Butt href="/signup">Get Started</Butt>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/download.jpeg?height=400&width=500"
                alt="Carbon footprint visualization"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c3ea65] via-transparent to-transparent opacity-30"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center">
              <Leaf01Icon className="h-8 w-8 text-accent-500 mr-3" />
              <div>
                <p className="font-semibold">Reduce CO2</p>
                <p className="text-sm text-gray-600">by 30% in 3 months</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf01Icon,
              title: "Personalized Insights",
              description:
                "Get tailored recommendations based on your lifestyle",
            },
            {
              icon: ZapIcon,
              title: "Real-time Tracking",
              description:
                "Monitor your progress with live carbon footprint updates",
            },
            {
              icon: Recycle01Icon,
              title: "Community Challenges",
              description: "Join eco-challenges and compete with friends",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <feature.icon className="h-12 w-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
