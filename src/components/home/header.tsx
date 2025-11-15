import { ReactNode } from "react";

export function HeaderComponent({
  children,
}: Readonly<{
  children: ReactNode,
}>) {
  return <header className="h-20 p-8 w-full bg-green-400 flex justify-between">{children}</header>;
}
