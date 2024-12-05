import { Input } from "@nextui-org/input";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <section className="border-r bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]"></section>
      <section className="border-r grid place-items-center h-screen">
        <div>
          <div className="my-10 text-center">
          <div className="flex items-center justify-center gap-3">
              <Image src="/logo-light.png" height={40} width={40} />
              <Link href="/" className="font-bold font-playfair text-4xl">
                CarbonQuest
              </Link>
            </div>
            <p className="font-medium lowercase text-neutral-500">A Quest to Conqueror Carbon Emission.</p>
          </div>
          <form action="" className="flex flex-col gap-4 max-w-[25rem]">
            <Input type="text" label="username" className="w-[23rem] md:w-[25rem]" />
            <Input type="password" label="password" className="w-[23rem] md:w-[25rem]" />
            <Link href="" className="text-blue-400 text-xs font-medium text-right">Forgot password?</Link>
            <Button className="mt-3 font-medium bg-accent-500">
              Log In
            </Button>
            <p className="font-medium text-center text-xs">
              New to CarbonQuest?{" "}
              <Link href="/signup" className="text-blue-400">
                Sign Up
              </Link>{" "}
              here.
            </p>
          </form>
        </div>
      </section>
      
    </div>
  );
}
