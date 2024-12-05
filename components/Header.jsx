import Image from "next/image";
import Link from "next/link";
import Butt from "./Button";
import { Login02Icon } from "hugeicons-react";

export default function Header() {
  return (
    <header className="lg:px-[12rem] px-2 py-2 border-b bg-white/70 backdrop-blur-xl z-20 sticky top-0">
      <div className="flex items-center justify-between">
        <Link href="" className="flex items-center gap-1">
          <Image src="/logo-light.png" height={50} width={50} alt="logo"/>
          <Image src="/logo2.svg" height={120} width={120} alt="logo"/>
        </Link>
        <div className="hidden md:flex items-center gap-2 font-semibold">
          <Link
            href="/login"
            className="flex h-14 w-32 rounded-xl hover:bg-neutral-100 transition items-center justify-center gap-2"
          >
            <Login02Icon className="size-5 rotate-180"/>
            Log In
          </Link>
          <Butt href="/signup">Sign Up</Butt>
        </div>
      </div>
    </header>
  );
}