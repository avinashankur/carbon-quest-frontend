import Link from "next/link";
import Image from "next/image";
import { ArrowDown02Icon } from "hugeicons-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhyCarbonQuest from "@/components/WhyCarbonQuest";
import FAQ from "@/components/Faq";
import { CircleEqual, CircleHelp, CircleUser, Sprout, UserRoundPlus } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <section className="min-h-screen mt-8 max-w-[70rem] mx-auto">
        <h1 className="font-playfair text-6xl font-medium uppercase mb-6">
          Discover your Impact
        </h1>
        <div className="h-[32rem] w-full bg-neutral-400 overflow-hidden">
          <Image src="/download.jpeg" height={800} width={1200} />
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="max-w-[40rem]">
            Welcome to CarbonQuest, where you can easily track your carbon
            emissions and progress. Join us in the mission towards a greater
            future.
          </p>
          <Link
            href="/signup"
            className="border-2 border-black hover:bg-black hover:text-white transition px-2 py-2 flex items-center gap-2"
          >
            <UserRoundPlus size={20}/>
            Get Started
          </Link>
        </div>
      </section>

      {/* <section className="h-screen mt-10 flex flex-col justify-center align-center bg-grad">
        <div className="w-[70rem] mx-auto">
          <div className="border-b pb-10 border-black">
            <h1 className="text-5xl font-playfair font-medium uppercase text-white">
              About carbonquest
            </h1>
            <p className="mt-8 max-w-[50rem] text-xl">
              At CarbonQuest, we are dedicated to empowering users to monitor
              and reduce their carbon footprint. Our platform offers a fun and
              rewarding experience to promote sustainable living.
            </p>
          </div>
        </div>
      </section> */}

      <section className="min-h-screen flex items-center justify-center">
        <div className="mx-6 my-10 bg-accent-400 px-10 rounded-3xl min-h-[40rem] w-full flex flex-col gap-[5rem] items-center justify-center">
          <h1 className="text-5xl font-playfair font-medium max-w-[40rem] text-center">
            Calculating your Footprints takes just a few minutes
          </h1>
          <div className="flex gap-10 text-justify">
            <div className="max-w-[20rem]">
              
              <h2 className="font-bold text-xl mb-4 bg-accent-500 px-3 py-2 flex items-center gap-2"><CircleUser />Create your account</h2>
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

      <section className="mt-[20rem] max-w-[70rem] mx-auto flex flex-col items-center justify-between">
        <div>
          <h1 className="text-6xl font-playfair font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-green-900 to-[#66cc00] pb-2">
            Small Steps, Big Impact—Track, Learn, and Reduce Your Carbon
            Footprint Today!
          </h1>
        </div>
      </section>

      <section className="min-h-screen mb-[20rem] pt-40 border-t mt-20">
        <h1 className="text-5xl font-playfair font-medium text-center flex items-center justify-center gap-4">
        <CircleHelp size={32}/>
          Frequently Asked Questions
        </h1>
        <p className="mt-2 mb-20 text-center font-medium text-neutral-500">
          Curious about something? Check out our FAQs below!
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
      <Footer />
    </>
  );
}
