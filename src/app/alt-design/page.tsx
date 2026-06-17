import Link from 'next/link';
import { ArrowLeft, ArrowRight, BarChart3, Blocks, CalendarDays, Mail, Sparkles } from 'lucide-react';

const focusCards = [
  {
    label: 'Now',
    title: 'Program operations at UArizona Cancer Center',
    body: 'COHC and IMHO coordination, REDCap/Trellis data workflows, dashboards, and cleaner ways for teams to track community-facing work.',
    icon: CalendarDays,
  },
  {
    label: 'Builds',
    title: 'AI, Web3, and decision tools',
    body: 'Hackathon products, interview agents, group planning systems, prediction-market infrastructure, and analytics projects with a practical edge.',
    icon: Blocks,
  },
  {
    label: 'Thread',
    title: 'People first, systems second',
    body: 'The through-line is making scattered information easier to act on, whether the setting is a research program, a student team, or a product demo.',
    icon: BarChart3,
  },
];

const featuredWork = [
  {
    title: 'Hack Arizona Social Innovation Track',
    meta: 'Community, AI, economic mobility',
    image: '/images/hackaz%20new.png',
  },
  {
    title: 'spruce.fun',
    meta: 'Solana, Rust risk engine, prediction markets',
    image: '/images/regen_art_canvas_2.png',
  },
  {
    title: 'Interview.AI',
    meta: 'Mock interviews, resume parsing, voice feedback',
    image: '/images/personal.jpeg',
  },
];

const stats = [
  ['136', 'Hack Arizona participants'],
  ['42', 'Projects submitted'],
  ['3', 'Project lenses: AI, data, systems'],
];

export default function AltDesignPage() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#15120d]">
      <section className="min-h-screen px-5 py-6 md:px-10 md:py-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-black/10 pb-5">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-black/65 hover:text-black">
            <ArrowLeft className="h-4 w-4" />
            Current site
          </Link>
          <div className="hidden items-center gap-5 text-sm font-semibold text-black/60 md:flex">
            <a href="#work" className="hover:text-black">Work</a>
            <a href="#notes" className="hover:text-black">Notes</a>
            <a href="mailto:karansalot10@gmail.com" className="hover:text-black">Email</a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 pt-14 lg:grid-cols-[1fr_0.86fr] lg:pt-20">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-semibold text-black/70">
                <Sparkles className="h-4 w-4 text-[#b48a00]" />
                Alternate direction
              </p>
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-normal md:text-7xl lg:text-8xl">
                Karan Salot builds useful systems for messy human work.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/65 md:text-xl">
                A quieter portfolio concept: less neon, more editorial rhythm. Product thinking, program operations, data systems, and community work sit together without shouting over each other.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 border-y border-black/10 py-5">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-black/45">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-black shadow-2xl shadow-black/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/personal.jpeg" alt="Karan on campus" className="h-full min-h-[520px] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/55">Tucson, Arizona</p>
              <p className="mt-2 text-2xl font-bold text-white">Product, data, programs, community.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="notes" className="px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
          {focusCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">{card.label}</span>
                  <Icon className="h-5 w-5 text-[#b48a00]" />
                </div>
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <p className="mt-4 leading-relaxed text-black/62">{card.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="work" className="px-5 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl border-t border-black/10 pt-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">Selected work</p>
              <h2 className="mt-2 text-4xl font-bold md:text-5xl">A few anchors.</h2>
            </div>
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-black/70 hover:text-black">
              See full project section
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {featuredWork.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-2xl border border-black/10 bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-black/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">{item.meta}</p>
                  <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-semibold text-black/60 md:flex-row md:items-center">
          <p>Alternate preview only. Current site remains unchanged.</p>
          <a href="mailto:karansalot10@gmail.com" className="inline-flex items-center gap-2 hover:text-black">
            <Mail className="h-4 w-4" />
            karansalot10@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
