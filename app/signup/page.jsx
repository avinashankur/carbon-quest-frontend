"use client";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";

export default function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex">
      <section className="w-1/2 border-r grid place-items-center h-screen">
        <div>
          <div className="my-10 text-center">
            <Link href='/' className="font-bold font-playfair text-4xl">CarbonQuest</Link>
            <p className="font-medium lowercase text-neutral-500">
              A Quest to Conqueror Carbon Emission.
            </p>
          </div>

          {!isSignUp ? (
            <form action="" className="flex flex-col gap-4">
              <Input type="text" label="name" className="w-[25rem]" />
              <Input type="text" label="username" className="w-[25rem]" />
              <Input type="email" label="email" className="w-[25rem]" />
              <Input type="password" label="password" className="w-[25rem]" />

              <Button
                className="mt-3 font-medium bg-accent-500"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </Button>
              <p className="font-medium text-center text-xs">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400">
                  Login
                </Link>{" "}
                here.
              </p>
            </form>
          ) : (
            <div>
              <form htmlFor="" className="flex flex-col gap-3">
                <Input type="number" label="age" className="w-[25rem]" />
                <Input
                  type="number"
                  label="family members"
                  className="w-[25rem]"
                />
                <div className="flex justify-between items-center">
                  <label htmlFor="" className="font-medium">
                    Profile Picture:
                  </label>
                  <Input type="file" className="w-[7rem]" />
                </div>
                <div className="flex justify-between mt-4 gap-2">
                  <Button
                    radius="none"
                    className="w-full bg-accent-500"
                    onClick={() => setIsSignUp(false)}
                    startContent={<ArrowLeft01Icon />}
                  >
                    Back
                  </Button>
                  <Button
                    radius="none"
                    className="w-full bg-accent-500"
                    endContent={<ArrowRight01Icon />}
                  >
                    Register
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
      <section className="w-1/2"></section>
    </div>
  );
}
