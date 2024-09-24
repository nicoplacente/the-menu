export default function Parrafos({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm sm:text-base text-center opacity-70 text-pretty ${className}`}
    >
      {children}
    </p>
  );
}
