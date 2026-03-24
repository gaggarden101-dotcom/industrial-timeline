import Image from "next/image";

type TimelineEvent = {
  year: string;
  title: string;
  summary: string;
  impact: string;
  nextStep: string;
  image: string;
  imageAlt: string;
};

const events: TimelineEvent[] = [
  {
    year: "1700s",
    title: "Better Farming Helped Prepare Britain for Change",
    summary:
      "Before factories took over, farming in Britain was already changing. New tools, crop rotation, and better use of land helped farmers grow more food with fewer workers.",
    impact:
      "This mattered because a larger food supply helped the population grow. At the same time, fewer people were needed on farms, so more workers became available for jobs in towns and factories.",
    nextStep:
      "In other words, farming improvements came first, and they helped create the conditions that made industrial growth possible.",
    image: "/timeline/Jethro Tull seed drill 1762.webp",
    imageAlt: "Illustration of Jethro Tull's seed drill.",
  },
  {
    year: "1764",
    title: "The Spinning Jenny Sped Up Textile Work",
    summary:
      "James Hargreaves invented the Spinning Jenny, a machine that let one person spin several threads at the same time. That made cloth production much faster than it had been before.",
    impact:
      "Textiles were one of the first industries to change during the Industrial Revolution. The machine showed that technology could produce goods faster and more cheaply than hand labor.",
    nextStep:
      "Once textile machines proved successful, people began looking for more ways to use machines in production.",
    image: "/timeline/Spinning Jenny.webp",
    imageAlt: "A historical image of the Spinning Jenny.",
  },
  {
    year: "1769",
    title: "Watt's Steam Engine Made Factory Power More Reliable",
    summary:
      "James Watt improved the steam engine so it worked better and wasted less energy. Because of that, it became useful in factories, mines, and transportation.",
    impact:
      "This was important because factories no longer had to depend only on rivers for power. Steam engines made it easier for industry to spread to more places.",
    nextStep:
      "As steam power improved, factories became larger and industrial growth picked up speed.",
    image: "/timeline/Watt-Steam-Engine.webp",
    imageAlt: "A diagram of a Watt steam engine.",
  },
  {
    year: "1770s to 1800s",
    title: "Factories Replaced Many Small Workshops",
    summary:
      "Production gradually moved out of homes and small shops and into factories. In those factories, workers and machines were gathered in one place so goods could be made more quickly.",
    impact:
      "This changed daily life for workers. Factory owners could produce more goods, but workers often lost control over their pace, hours, and working conditions.",
    nextStep:
      "Because machines worked best in central locations, the factory system kept growing and changed the way families earned a living.",
    image: "/timeline/early textile factory 1800s.webp",
    imageAlt: "An early textile factory interior.",
  },
  {
    year: "1804",
    title: "Steam Locomotives Changed Transportation",
    summary:
      "Early steam locomotives showed that trains could move goods and people faster than wagons and horses. Railroads then expanded during the 1800s.",
    impact:
      "Transportation became faster, cheaper, and more dependable. Raw materials could reach factories more quickly, and finished goods could be sold farther away.",
    nextStep:
      "Industrial growth created a need for better transportation, and railroads helped industry expand even more.",
    image: "/timeline/early steam locomotive 1804.webp",
    imageAlt: "An early steam locomotive.",
  },
  {
    year: "1820s to 1850s",
    title: "Cities Grew Fast as People Moved for Work",
    summary:
      "As factories spread, many people moved from villages to cities to find jobs. Cities grew quickly, but they often did not have enough housing, clean water, or sanitation.",
    impact:
      "City life created new opportunities, but it also brought overcrowding, pollution, and disease. Industrial change was not just about machines. It also changed where and how people lived.",
    nextStep:
      "As urban problems grew worse, people began paying more attention to the social costs of industrialization.",
    image: "/timeline/Manchester industrial city 1800s.webp",
    imageAlt: "An industrial city in the 1800s.",
  },
  {
    year: "1830s to 1840s",
    title: "Factory Work Could Be Harsh and Dangerous",
    summary:
      "Many factory workers spent long hours in unsafe conditions for low pay. Men, women, and children often worked around dangerous machines with very little protection.",
    impact:
      "This showed that industrial progress came with serious human costs. Even though production increased, many workers did not benefit right away.",
    nextStep:
      "As people saw these problems more clearly, they began demanding laws and reforms to protect workers.",
    image: "/timeline/child factory workers industrial revolution.webp",
    imageAlt: "A historical image of child factory workers.",
  },
  {
    year: "1833",
    title: "The Factory Act Was an Early Reform Law",
    summary:
      "In Britain, the Factory Act of 1833 limited how long some children could work and brought in basic inspections for textile mills.",
    impact:
      "This was one of the first signs that government was stepping in to deal with the worst factory abuses. It did not solve every problem, but it was an important beginning.",
    nextStep:
      "Later reforms built on laws like this one as pressure for worker protection continued to grow.",
    image: "/timeline/19th century labor movement.webp",
    imageAlt: "A historical image connected to labor reform.",
  },
  {
    year: "1850s to 1870s",
    title: "Industrialization Spread Beyond Britain",
    summary:
      "The machines, ideas, and factory methods first used in Britain spread to countries such as Belgium, France, Germany, and the United States.",
    impact:
      "Industrialization became an international force instead of something limited to one country. Nations that industrialized often gained stronger economies and better transportation systems.",
    nextStep:
      "As more countries industrialized, the balance of power in the modern world began to shift.",
    image: "/timeline/industrialization spreads world map.webp",
    imageAlt: "A map showing the spread of industrialization.",
  },
  {
    year: "Late 1800s",
    title: "A New Industrial Society Had Taken Shape",
    summary:
      "By the late 1800s, industrial economies had created larger middle classes, powerful business leaders, and more organized groups of workers.",
    impact:
      "By this point, the Industrial Revolution had changed much more than production. It had reshaped class structure, politics, education, and everyday life.",
    nextStep:
      "Its effects lasted far beyond the 1800s and still influence modern work, cities, and technology today.",
    image: "/timeline/19th century labor movement.webp",
    imageAlt: "A nineteenth century labor movement.",
  },
];

function EventCard({ event }: { event: TimelineEvent }) {
  return (
    <article className="relative md:pl-10">
      <div className="absolute left-0 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--page-accent)] md:block" />
      <div className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6 shadow-[0_14px_34px_rgba(31,42,55,0.06)] md:p-8">
        <div className="flex flex-col gap-5 border-b border-[var(--page-border)] pb-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--page-accent)]">
              {event.year}
            </p>
            <h3 className="mt-2 font-[family:var(--font-display)] text-3xl leading-tight text-slate-900">
              {event.title}
            </h3>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="overflow-hidden rounded-[1.35rem] border border-[var(--page-border)] bg-[#f8f4ec]">
            <div className="relative min-h-[240px]">
              <Image
                src={event.image}
                alt={event.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
            </div>
            <p className="border-t border-[var(--page-border)] px-4 py-3 text-sm leading-6 text-slate-600">
              {event.imageAlt}
            </p>
          </div>

          <div className="space-y-4 text-[1.03rem] leading-8 text-slate-700">
            <p>{event.summary}</p>
            <p>{event.impact}</p>
            <p className="rounded-2xl bg-[#f4eee2] px-4 py-4 text-slate-800">{event.nextStep}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--page-border)] bg-[#f8f4ec]/95">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--page-accent)]">
            Modern World in Motion
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_300px]">
            <div>
              <h1 className="max-w-4xl font-[family:var(--font-display)] text-5xl leading-none text-slate-900 md:text-6xl">
                The Industrial Revolution
              </h1>
              <p className="mt-4 max-w-3xl text-xl leading-8 text-slate-700">
                A timeline showing how new machines, factory work, and city growth changed daily
                life from the 1700s to the late 1800s.
              </p>
              <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-slate-700">
                <p>
                  What stood out most to me while looking at this period is that the Industrial
                  Revolution was not just about inventions. It changed where people worked, where
                  they lived, and how governments responded when conditions became unfair or unsafe.
                </p>
                <p>
                  The timeline below follows those changes in order, starting with farming
                  improvements in Britain and ending with the rise of a new industrial society by
                  the late 1800s.
                </p>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-5 lg:self-start">
              <h2 className="font-[family:var(--font-display)] text-2xl text-slate-900">
                Quick Notes
              </h2>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                <li>Time period: 1700s to late 1800s.</li>
                <li>Industrialization began in Britain before spreading to other countries.</li>
                <li>One major pattern was that each change led to another.</li>
              </ul>
            </aside>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="max-w-4xl">
          <h2 className="font-[family:var(--font-display)] text-4xl text-slate-900">
            Main idea
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            The Industrial Revolution changed the modern world because new technology made
            production faster, but those same changes also created hard working conditions,
            crowded cities, and pressure for reform.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--page-border)] bg-[#f8f5ee]/85">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-4xl">
            <h2 className="font-[family:var(--font-display)] text-4xl text-slate-900">
              Timeline of major changes
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              I organized these events in chronological order to show how one development often
              pushed the next one forward.
            </p>
          </div>

          <div className="relative mt-8 space-y-6 md:pl-4">
            <div className="absolute bottom-0 left-[0.7rem] top-0 hidden w-px bg-[#cdd7e0] md:block" />
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6">
            <h2 className="font-[family:var(--font-display)] text-3xl text-slate-900">
              Why the events connect
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Better farming helped population growth. More workers and new inventions helped
              factories grow. Factories increased the need for steam power and railroads. As
              cities expanded and working conditions worsened, people pushed for reform.
            </p>
          </section>

          <section className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6">
            <h2 className="font-[family:var(--font-display)] text-3xl text-slate-900">
              Why it still matters
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              A lot of the modern world still reflects this period. Factory systems, rail networks,
              labor laws, and even debates about how technology changes everyday life can all be
              traced back to the Industrial Revolution.
            </p>
          </section>
        </div>
      </section>

      <section className="border-t border-[var(--page-border)] bg-[#f8f4ec]/80">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
          <div className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6 md:p-8">
            <h2 className="font-[family:var(--font-display)] text-4xl text-slate-900">
              Conclusion
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
              Overall, the Industrial Revolution changed much more than the way goods were made.
              It reshaped work, transportation, cities, and social class. It brought progress, but
              it also created new problems, which is why this period is still important to study.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
