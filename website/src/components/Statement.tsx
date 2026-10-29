// Eyebrow label over a huge uppercase statement. Reused at the top of every section.
export function Statement({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative flex w-[95%] max-w-6xl flex-col uppercase ${className}`}>
      <p className="w-full text-left text-xl font-medium text-primary md:text-2xl">{eyebrow}</p>
      <h2 className="text-4xl font-bold text-balance md:text-5xl">{children}</h2>
    </div>
  );
}
