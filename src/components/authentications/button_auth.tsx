"use client";

import { ReactNode } from "react";

type ButtonAuthProps = {
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  position?: "left" | "right";
  full?: boolean;
  type?: "button" | "submit";
};

export function ButtonAuth({
  children,
  isActive = false,
  onClick,
  position,
  full = false,
  type = "button",
}: ButtonAuthProps) {
  const rounded =
    position === "left"
      ? "rounded-l-lg"
      : position === "right"
        ? "rounded-r-lg"
        : "rounded-md";

  const width = full ? "w-full" : "w-[100px]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 border border-green-600 font-semibold transition-colors
        ${rounded}
        ${width}
        ${isActive
          ? "bg-green-600 text-white"
          : "bg-white text-green-600 hover:bg-green-50"
        }`}
    >
      {children}
    </button>
  );
}
