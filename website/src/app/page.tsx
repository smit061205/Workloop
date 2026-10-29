import { ArrowRight } from "lucide-react";
import { CellBand } from "@/components/CellBand";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { NumberedRows } from "@/components/NumberedRows";
import { ServiceRows } from "@/components/ServiceRows";
import { Statement } from "@/components/Statement";
import { about, services, work, workflow } from "@/content/site";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <Hero />

        <section id="about" className="relative flex w-full scroll-mt-12 flex-col items-center justify-center bg-tint">
          <Statement eyebrow={about.eyebrow} className="mt-40">
            {about.statement}
          </Statement>
          <CellBand items={about.stats} cols="grid-cols-2 lg:grid-cols-4" cellBg="bg-tint" className="mt-30" />
        </section>

        <section
          id="services"
          className="relative flex min-h-screen w-full scroll-mt-12 flex-col items-center justify-center"
        >
          <Statement eyebrow={services.eyebrow} className="my-40">
            {services.statement}
          </Statement>
          <ServiceRows items={services.rows} />
          <div className="flex w-full items-center justify-center py-10">
            <a
              href={services.more.href}
              className="flex items-center gap-2 font-poppins text-xl text-primary hover:underline md:text-2xl"
            >
              {services.more.label}
              <ArrowRight className="size-6" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          id="process"
          className="relative mt-10 flex min-h-screen w-full scroll-mt-12 flex-col items-center justify-center bg-tint"
        >
          <Statement eyebrow={workflow.eyebrow} className="my-40">
            {workflow.statement}
          </Statement>
          <NumberedRows items={workflow.steps} />
        </section>

        <section id="work" className="relative my-32 flex w-full scroll-mt-12 flex-col items-center justify-center">
          <Statement eyebrow={work.eyebrow} className="mt-40">
            {work.statement}
          </Statement>
          <CellBand
            items={work.projects}
            cols="grid-cols-1 md:grid-cols-3"
            cellBg="bg-background"
            titleClass="text-4xl uppercase"
            className="mt-20"
          />
        </section>
      </main>

      <Contact />
    </>
  );
}
