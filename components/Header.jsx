import { LogIn, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Butt from "./Button";

export default function Header() {
  return (
    <header className="px-[12rem] py-2 border-b bg-white/70 backdrop-blur-xl z-20 sticky top-0">
      <div className="flex items-center justify-between">
        <Link href="" className="flex items-center gap-1">
          <Image src="/logo1.svg" height={60} width={60} />
          <Image src="/logo2.svg" height={120} width={120} />
        </Link>
        <div className="flex items-center gap-2 font-semibold">
          <Link
            href="/login"
            className="h-12 w-32 rounded-xl hover:bg-neutral-100 transition flex items-center justify-center gap-2"
          >
            <LogIn className="size-5"/>
            Log In
          </Link>
          {/* <Link
            href="/signup"
            className="bg-accent-400 px-6 py-2 border border-accent-500 hover:opacity-80 transition flex items-center gap-2"
          >
            <UserRoundPlus className="size-5" />
            Sign Up
          </Link> */}
          <Butt href="/signup">Sign Up</Butt>
        </div>
      </div>
    </header>
  );
}
