export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col justify-center items-center align-middle  h-screen gap-4">
      {children}
    </section>
  );
}
