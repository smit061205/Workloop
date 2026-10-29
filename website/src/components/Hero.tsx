import { pill } from "@/components/ui";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full max-w-6xl flex-col items-center justify-center pt-12"
    >
      <h1 className="flex w-[95%] flex-col text-5xl font-bold uppercase md:text-8xl">
        <span className="w-full">{hero.line1}</span>
        <span className="w-full text-right text-foreground/50">
          {hero.line2} <span className="text-primary/50">{hero.highlight}</span>
        </span>
      </h1>

      <div className="mt-10 flex w-[95%] flex-col items-start justify-between md:flex-row-reverse md:items-center">
        <p className="w-full max-w-[700px] text-sm md:text-xl">{hero.text}</p>
        <a href="#contact" className={`${pill} mt-10 h-14 px-7 text-xl font-bold uppercase md:mt-0`}>
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
