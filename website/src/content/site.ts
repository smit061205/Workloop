import type { Cell } from "@/components/CellBand";

// All words on the homepage live here. Placeholders are marked TODO.

export const site = {
  name: "Workloop Studios",
  email: "smit061205@gmail.com",
  year: 2026,
  description:
    "Websites, apps, AI tools and automation for Indian startups and small businesses, with every running cost shown in rupees.",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  line1: "We turn daily work into software",
  line2: "that runs itself,",
  highlight: "for almost nothing",
  text: "We're a software studio from India. We build websites, apps, AI tools and automation for startups and small businesses. Made for the people who use them, in their language, with every running cost shown in rupees.",
  cta: "Start a project",
};

export const about = {
  eyebrow: "About us",
  statement:
    "We're a small software studio from India. We build for the person who actually uses the software, in their language, and keep it cheap to run.",
  stats: [
    { title: "1", label: "Engineer you talk to", text: "You talk directly to the person who builds it. No account managers in between." },
    { title: "3", label: "Languages", text: "English, Gujarati and Hindi, for the people who will actually use it." },
    { title: "₹0", label: "Hosting to start", text: "Free hosting and low-cost AI wherever they fit, with every cost shown in rupees." },
    { title: "100%", label: "Tested before release", text: "Every change is checked on real phones and real data before it ships." },
  ] satisfies Cell[],
};

export const services = {
  eyebrow: "What we build",
  statement:
    "From the first idea to the tool your team opens every morning. Then we keep it running.",
  rows: [
    { title: "Websites & web apps", text: "Fast on everyday phones and patchy 4G, in English, Gujarati and Hindi." },
    { title: "Desktop & phone apps", text: "Apps your team installs once. They update themselves and keep working offline." },
    { title: "AI in your daily work", text: "Writing, translating and checking, with every number verified against its source." },
    { title: "Automation", text: "The job your team does by hand every day, done by software on a schedule." },
    { title: "Running it afterwards", text: "Updates, fixes and low-cost hosting, with every running cost shown in rupees." },
  ],
  more: { label: "See our work", href: "#work" },
};

export const workflow = {
  eyebrow: "How we work",
  statement: "From the first call to software your team uses every day, in five steps.",
  steps: [
    "Tell us the job your team does by hand, or the product you want to build. We listen first.",
    "You get a plan and a quote in rupees, including what it will cost to run every month.",
    "We build in small steps and show you working software every week, not slides.",
    "We test it on real phones, real data and real users, then launch it.",
    "We keep it running with updates, fixes and hosting, at a cost you can always see.",
  ],
};

// TODO: confirm with Capital Kranti what may be shown before this goes live.
export const work = {
  eyebrow: "Our work",
  statement: "Software that is already running every day.",
  projects: [
    {
      kicker: "Capital Kranti · Desktop app",
      title: "Newsroom app",
      text: "Makes a Gujarati daily newspaper by itself every evening: collects the news, writes it, lays out the pages and checks them.",
    },
    {
      kicker: "Capital Kranti · Website",
      title: "News website",
      text: "A live news site in Gujarati, English and Hindi with its own news engine, running at ₹0 a month for AI.",
      href: "https://capital-kranti.vercel.app", // TODO: switch to capitalkranti.co.in once it's live
      linkLabel: "Visit Capital Kranti",
    },
    {
      kicker: "Capital Kranti · AI writing",
      title: "Aavtikal",
      text: "Long explainers on AI, technology and science, with every number checked against its sources.",
      href: "https://capital-kranti.vercel.app/aavtikal",
      linkLabel: "Read Aavtikal",
    },
  ] satisfies Cell[],
};

export const contact = {
  title: "Have work your team does by hand every day? Let's talk.",
  text: "Tell us what you need. You talk directly to the engineer who builds it, and you get a quote in rupees, including what it costs to run each month.",
  links: [
    { label: "WhatsApp", href: "https://wa.me/918160167021" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/smit-thakkar-379ab6293/" },
    { label: "GitHub", href: "https://github.com/smit061205" },
    { label: "Instagram", href: "https://www.instagram.com/smitthakkar64/" },
  ],
};
