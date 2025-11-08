"use client";

import { ReactNode } from "react";

export function ButtonAuth({
  children,
  isActive,
  onClick,
  position,
  full,
}: Readonly<{
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  position?: "left" | "right";
  full?: boolean;
}>) {
  const rounded =
    position === "left"
      ? "rounded-l-lg"
      : position === "right"
        ? "rounded-r-lg"
        : "rounded-md";

  const width = full ? "w-full" : "w-[100px]";

  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-4 py-2 border border-green-600 font-semibold transition-colors ${rounded} ${width} ${isActive
        ? "bg-green-600 text-white"
        : "bg-white text-green-600 hover:bg-green-50"
        }`}
    >
      {children}
    </button>
  );
}
