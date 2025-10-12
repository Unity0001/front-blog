export function AuthBackground({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen overflow-hidden bg-[linear-gradient(157deg,rgba(16,20,125,1)_0%,rgba(10,166,109,1)_59%,rgba(39,141,230,1)_100%)]">
      {children}
    </div>
  );
}
