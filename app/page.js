import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyCarbonQuest from "@/components/WhyCarbonQuest";
import FAQ from "@/components/FAQ";
import {
  CircleEqual,
  CircleUser,
  Sprout,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className="min-h-screen flex">
        <div className="mx-6 bg-accent-400 mb-20 px-10 rounded-3xl min-h-[40rem] w-full flex flex-col gap-[5rem] items-center justify-center">
          <h1 className="text-5xl font-playfair font-medium max-w-[40rem] text-center">
            Calculating your Footprints takes just a few minutes
          </h1>
          <div className="flex gap-10 text-justify">
            <div className="max-w-[20rem]">
              <h2 className="font-bold text-xl mb-4 bg-accent-500 px-3 py-2 flex items-center gap-2">
                <CircleUser />
                Create your account
              </h2>
              <p>
                Join our community and start your journey towards a greener
                lifestyle with a quick and easy sign-up process.
              </p>
            </div>
            <div className="max-w-[20rem]">
              <h2 className="font-bold text-xl mb-4 bg-accent-500 px-3 py-2 flex items-center gap-2">
                <CircleEqual />
                Calculate your footprints
              </h2>
              <p>
                Answer a few questions to get a personalized view of your daily
                carbon emissions, giving you insights into your environmental
                impact.
              </p>
            </div>
            <div className="max-w-[20rem]">
              <h2 className="font-bold text-xl mb-4 bg-accent-500 px-3 py-2 flex items-center gap-2">
                <Sprout />
                Discover your impact!
              </h2>
              <p>
                See your total carbon footprint and explore practical tips to
                reduce it, helping you make a positive change for the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyCarbonQuest />

      <section className="min-h-screen mb-[20rem] pt-40 mt-20">
        <h1 className="text-5xl font-playfair font-medium text-center">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 mb-20 text-center font-medium text-neutral-500">
          Curious about something? Check out FAQs below!
        </p>
        <FAQ />
        <p className="text-center font-medium text-neutral-500 mt-4">
          Have another question? Email us at{" "}
          <Link
            href="mailto:carbonquest@helpcare.com"
            className="underline hover:text-black"
          >
            carbonquest@helpcare.com
          </Link>
        </p>
      </section>
      <section className="my-[20rem] max-w-[70rem] mx-auto flex flex-col items-center justify-between">
        <div>
          <h1 className="text-6xl font-playfair font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-800 to-[#66cc00] pb-2">
            Small Steps, Big Impact—Track, Learn, and Reduce Your Carbon
            Footprint Today!
          </h1>
        </div>
      </section>
      <Footer />
    </>
  );
}
