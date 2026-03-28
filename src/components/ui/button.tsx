import Sparkle from "@/assets/mask/sparkle";
import clsx from "clsx";
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "lime" | "blue" | "default" | "white";
  children?: ReactNode;
}

const buttonStyles = {
  lime: "bg-[#C6F806] text-black border-black",
  blue: "bg-[#3366FF] text-white border-white",
  white: "bg-white text-black border-black",
  default: "bg-black text-white border-white",
};

const slashStyles = {
  lime: "fill-black",
  blue: "fill-white",
  white: "fill-white",
  default: "fill-white",
};

const shadowStyles = {
  lime: "bg-black ",
  blue: "bg-white",
  white: "bg-white",
  default: "bg-white",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, color, ...props }, ref) => {
    return (
      <main
        className={clsx("relative group w-fit h-fit cursor-pointer", className)}
        ref={ref}
        {...props}
      >
        <Sparkle
          className={`w-c-10 md:w-c-12 lg:w-c-14 h-full absolute -top-c-9 -left-c-9 group-active:hidden transition-all duration-300 ${slashStyles[color]}`}
        />
        <button
          className={`font-tt-commons-bold z-10 rounded-full px-c-6 py-c-4 text-c-7-5  group-active:translate-c-2 res-border transition-all duration-300 ease-in-out cursor-pointer relative shine ${buttonStyles[color]}`}
          {...props}
        >
          {children || "Default"}
        </button>
        <div
          className={`absolute w-full h-full top-c-2 left-c-2 rounded-full ${shadowStyles[color]}`}
        />
      </main>
    );
  },
);
