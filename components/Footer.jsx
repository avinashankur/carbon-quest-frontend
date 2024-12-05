import { Button, Input } from "@nextui-org/react";
import Butt from "./Button";

export default function Footer() {
  return (
    <div className="lg:px-[12rem] px-2 bg-accent-400">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="py-6">
          <ul className="flex items-center gap-2">
            <li>Simple</li>
            <li>•</li>
            <li>Track</li>
            <li>•</li>
            <li>Reduce</li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 py-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl font-playfair font-semibold leading-tight">
              Mindful choices,
              <br />
              Lasting impact. Track,
              <br />
              Reduce and make a<br />
              difference!
            </h1>
            <Butt href="/signup" className="bg-white">
              Sign Up
            </Butt>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="font-semibold text-neutral-600">Join Our Newsletter.</h2>
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
              />
              <Input
                type="email"
                placeholder="Email"
              />
              <Button
                type="submit"
                className="w-full bg-black hover:bg-black/90 text-white h-12"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
