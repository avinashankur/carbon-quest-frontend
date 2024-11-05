import Link from "next/link";
import { cn } from "@/utils/cn";
import { ArrowRight01Icon } from "hugeicons-react";
// import "./button.css";

export default function Butt({ children, href, className }) {
  return (
    <Link
      href={href}
      className={cn(
        "border text-center w-44 h-14 pr-8 rounded-2xl relative text-black font-semibold group flex items-center justify-end overflow-hidden",
        className
      )}
    >
      <span className="bg-accent-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[3px] group-hover:w-[166px] z-10 duration-250">
        <ArrowRight01Icon size={24} />
      </span>
      {children}
    </Link>
  );
}
