import Parrafos from "../ui/parrafos";

export default function SectionContainer({
  children,
  title,
  description,
  id,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`p-4 my-12 flex flex-col max-w-7xl mx-auto ${className}`}
    >
      {title && (
        <div className="mt-20 mb-32 flex flex-col gap-4 items-center">
          <h2 className="font-semibold text-3xl text-center animate-pulse-one text-balance">
            {title}
          </h2>
          <Parrafos>{description}</Parrafos>
        </div>
      )}
      {children}
    </section>
  );
}
