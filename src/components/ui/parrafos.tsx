export default function Parrafos({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm sm:text-base text-center opacity-70 text-pretty">
      {children}
    </p>
  );
}
