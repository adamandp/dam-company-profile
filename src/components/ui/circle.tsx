import { type HTMLAttributes } from "react";

export const Circle = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`bg-[#C6F806] res-border border-black rounded-full absolute ${className}`}
    {...props}
  />
);
