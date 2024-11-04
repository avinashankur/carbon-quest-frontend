import { Button, Input } from "@nextui-org/react";
import { UserRoundPlus } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-400 py-8 border-t border">
      <div className="px-[13rem] rounded-2xl max-w-[90rem] mx-auto grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 font-medium">
            <p>Simple •</p>
            <p>Track •</p>
            <p>Reduce</p>
          </div>
          <h1 className="text-4xl font-playfair font-semibold max-w-[25rem]">
            Mindful choices, Lasting impact. Track, Reduce and make a
            difference!
          </h1>
          <div className="flex gap-4">
            <Link
              href="/signup"
              className="bg-accent-500 border border-accent-600 px-6 py-2 hover:opacity-80 transition flex items-center gap-2"
            >
              <UserRoundPlus className="size-5" />
              Sign Up
            </Link>
          </div>
          <p className="mt-10 text-sm">All rights reserved.</p>
        </div>
        <div className=" flex flex-col items-end">
          <p className="font-semibold text-neutral-600">Join Our Newsletter.</p>
          <div className="mt-5 flex flex-col gap-4">
            <Input type="text" placeholder="Name" radius="none" className="w-[25rem]" />
            <Input type="email" placeholder="Email" radius="none" className="w-[25rem]" />
            <Button radius="none" className="w-[25rem] bg-black text-white">Submit</Button>
          </div>
          <div className="flex gap-4 mt-28 underline font-medium text-sm">
            <Link href="">Terms of Use</Link>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
