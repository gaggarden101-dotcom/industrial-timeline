import Image from "next/image";

type TimelineEvent = {
  year: string;
  category: string;
  title: string;
  whatHappened: string;
  whyItMatters: string;
  causeEffect: string;
  image: string;
  imageAlt: string;
};

const events: TimelineEvent[] = [
  {
    year: "1700s",
    category: "Agriculture",
    title: "Agricultural Improvements Prepared Britain for Change",
    whatHappened:
      "Before factories grew, farming in Britain got better because of new tools, crop rotation, and better use of land. Farmers could grow more food with fewer workers.",
    whyItMatters:
      "These farm changes helped make the Industrial Revolution possible. The population grew, and more people could leave farming and work in other jobs.",
    causeEffect:
      "Better farming led to more food and more people. That gave Britain more workers, which helped factories and cities grow.",
    image: "/timeline/Jethro Tull seed drill 1762.webp",
    imageAlt: "Illustration of Jethro Tull seed drill",
  },
  {
    year: "1764",
    category: "Textiles",
    title: "The Spinning Jenny Increased Textile Production",
    whatHappened:
      "James Hargreaves invented the Spinning Jenny, a machine that let one worker spin many threads at one time. This made cloth production much faster.",
    whyItMatters:
      "Textiles were one of the first major industries of the Industrial Revolution. This invention showed that machines could make goods faster than hand work.",
    causeEffect:
      "As more people wanted cloth, inventors made faster tools. The success of textile machines helped start the factory system.",
    image: "/timeline/Spinning Jenny.webp",
    imageAlt: "Historical image of a spinning jenny",
  },
  {
    year: "1769",
    category: "Energy",
    title: "Watt's Steam Engine Made Industry More Powerful",
    whatHappened:
      "James Watt improved the steam engine so it worked better than older models. It became useful in factories, mines, and transportation.",
    whyItMatters:
      "Steam power meant factories did not have to rely only on rivers or water wheels. Production could grow in more places.",
    causeEffect:
      "The need for stronger power led to better steam engines. Steam power then helped factories grow bigger and faster.",
    image: "/timeline/Watt-Steam-Engine.webp",
    imageAlt: "Diagram of a Watt steam engine",
  },
  {
    year: "1770s-1800s",
    category: "Industry",
    title: "Factories Replaced Many Small Workshops",
    whatHappened:
      "Work moved out of homes and small shops into large factories where machines and workers were all in one place.",
    whyItMatters:
      "This changed the way people worked. Factory owners could make goods faster and cheaper, but workers had less control over their time and conditions.",
    causeEffect:
      "New machines worked best when they were gathered in one place, so factories grew. This pulled work away from homes and changed daily life for families.",
    image: "/timeline/early textile factory 1800s.webp",
    imageAlt: "Early textile factory interior",
  },
  {
    year: "1804",
    category: "Transportation",
    title: "Steam Locomotives Changed Transportation",
    whatHappened:
      "The first successful steam locomotive showed that trains could move goods and people faster than wagons and horses. Railroads spread during the 1800s.",
    whyItMatters:
      "Transportation became cheaper, faster, and more dependable. Raw materials could get to factories faster, and finished goods could be sold in more places.",
    causeEffect:
      "Industrial growth created a need for better transportation. Railroads then helped industry grow even more by linking mines, factories, ports, and cities.",
    image: "/timeline/early steam locomotive 1804.webp",
    imageAlt: "Early steam locomotive illustration",
  },
  {
    year: "1820s-1850s",
    category: "Urbanization",
    title: "Urbanization Reshaped Society",
    whatHappened:
      "As factories grew, many people moved from villages to cities looking for work. Cities grew fast, often without enough housing or clean water systems.",
    whyItMatters:
      "Urban growth changed where and how people lived. It created new jobs and trade, but it also caused overcrowding, pollution, and disease.",
    causeEffect:
      "Factory jobs brought workers into cities. Fast city growth then created serious problems, which later pushed governments to make changes.",
    image: "/timeline/Manchester industrial city 1800s.webp",
    imageAlt: "View of an industrial city in the 1800s",
  },
  {
    year: "1830s-1840s",
    category: "Labor",
    title: "Factory Work Was Harsh and Dangerous",
    whatHappened:
      "Many factory workers worked long hours for low pay in unsafe places. Men, women, and children often worked near dangerous machines with little protection.",
    whyItMatters:
      "The Industrial Revolution increased production, but many workers did not benefit at first. Harsh factory conditions showed the human cost of industrial growth.",
    causeEffect:
      "Factory owners often focused on speed and profit, which led to poor treatment of workers. These conditions led to protests and demands for change.",
    image: "/timeline/child factory workers industrial revolution.webp",
    imageAlt: "Historical image of child factory workers",
  },
  {
    year: "1833",
    category: "Reform",
    title: "The Factory Act Began Labor Reform",
    whatHappened:
      "In Britain, the Factory Act of 1833 limited the hours some children could work and brought basic inspections to textile mills.",
    whyItMatters:
      "This law showed that governments were starting to respond to the worst problems of industrial growth. It was an early step toward protecting workers.",
    causeEffect:
      "Concern about child labor and unsafe conditions led to calls for reform. Laws like the Factory Act started to limit factory abuse.",
    image: "/timeline/19th century labor movement.webp",
    imageAlt: "Historical image connected to labor reform",
  },
  {
    year: "1850s-1870s",
    category: "Global Spread",
    title: "Industrialization Spread Beyond Britain",
    whatHappened:
      "The ideas, machines, and factory methods of the Industrial Revolution spread to Belgium, France, Germany, and the United States.",
    whyItMatters:
      "Industrialization became a world wide force instead of staying only in Britain. Countries that industrialized built stronger economies, transportation systems, and military power.",
    causeEffect:
      "Britains success encouraged other countries to copy factories, railroads, and machine production. This spread changed the balance of power in the modern world.",
    image: "/timeline/industrialization spreads world map.webp",
    imageAlt: "Map showing the spread of industrialization",
  },
  {
    year: "Late 1800s",
    category: "Society",
    title: "A New Industrial Society Emerged",
    whatHappened:
      "By the late 1800s, industrial economies had created bigger middle classes, powerful business leaders, and stronger worker groups.",
    whyItMatters:
      "The Industrial Revolution changed more than machines. It changed social class, politics, education, and daily life.",
    causeEffect:
      "As industry grew, society became more urban, more connected, and more complex. These changes helped shape modern capitalism, labor rights, and public education.",
    image: "/timeline/19th century labor movement.webp",
    imageAlt: "Historical image of a nineteenth century labor movement",
  },
];

const navigationLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#timeline", label: "Timeline" },
  { href: "#connections", label: "Key Connections" },
  { href: "#conclusion", label: "Conclusion" },
];

function withoutPunctuation(text: string) {
  return text
    .replace(/['’]/g, "")
    .replace(/[\p{P}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function EventCard({ event, index }: { event: TimelineEvent; index: number }) {
  return (
    <article className="relative md:pl-10">
      <div className="absolute left-0 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--page-accent)] md:block" />
      <div className="grid gap-6 rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6 shadow-[0_14px_34px_rgba(31,42,55,0.06)] md:grid-cols-[170px_1fr] md:p-8">
        <div className="border-b border-[var(--page-border)] pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--page-muted)]">
            {withoutPunctuation("Year")}
          </p>
          <p className="mt-3 font-[family:var(--font-display)] text-3xl leading-none text-[var(--page-accent)]">
            {withoutPunctuation(event.year)}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--page-muted)]">
            {withoutPunctuation(event.category)}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--page-accent)]">
            {withoutPunctuation(`Event ${index + 1}`)}
          </p>
          <h3 className="mt-2 font-[family:var(--font-display)] text-2xl leading-tight text-slate-900 md:text-[2rem]">
            {withoutPunctuation(event.title)}
          </h3>

          <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-[var(--page-border)] bg-[#f8f4ec]">
            <div className="grid gap-0 lg:grid-cols-[320px_1fr]">
              <div className="relative min-h-[220px] border-b border-[var(--page-border)] lg:border-b-0 lg:border-r">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--page-muted)]">
                  {withoutPunctuation("Historical Visual")}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {withoutPunctuation(event.imageAlt)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            <section className="rounded-2xl bg-[#f7f2ea] p-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--page-muted)]">
                {withoutPunctuation("What Happened")}
              </h4>
              <p className="mt-3 text-[1.02rem] leading-7 text-slate-700">
                {withoutPunctuation(event.whatHappened)}
              </p>
            </section>

            <section className="rounded-2xl bg-[#f7f2ea] p-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--page-muted)]">
                {withoutPunctuation("Why It Matters")}
              </h4>
              <p className="mt-3 text-[1.02rem] leading-7 text-slate-700">
                {withoutPunctuation(event.whyItMatters)}
              </p>
            </section>

            <section className="rounded-2xl border border-[#d5c8b2] bg-[#fbf7ef] p-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#77562e]">
                {withoutPunctuation("Cause and Effect")}
              </h4>
              <p className="mt-3 text-[1.02rem] leading-7 text-slate-700">
                {withoutPunctuation(event.causeEffect)}
              </p>
            </section>
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
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--page-accent)]">
            {withoutPunctuation("Modern World in Motion Project")}
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.9fr)]">
            <div>
              <h1 className="max-w-4xl font-[family:var(--font-display)] text-5xl leading-none text-slate-900 md:text-6xl">
                {withoutPunctuation("The Industrial Revolution")}
              </h1>
              <p className="mt-4 max-w-3xl text-xl leading-8 text-slate-700">
                {withoutPunctuation(
                  "How technology factories and city growth changed the modern world from the 1700s through the late 1800s."
                )}
              </p>
              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
                {withoutPunctuation(
                  "This timeline explains how industrial growth began why it spread and how it changed work transportation cities and daily life. It is organized to make the order of events easy to follow and the main idea easy to understand."
                )}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--page-border)] bg-[var(--page-panel)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--page-muted)]">
                    {withoutPunctuation("Time Period")}
                  </p>
                  <p className="mt-3 font-[family:var(--font-display)] text-2xl text-slate-900">
                    {withoutPunctuation("1700s Late 1800s")}
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--page-border)] bg-[var(--page-panel)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--page-muted)]">
                    {withoutPunctuation("Main Region")}
                  </p>
                  <p className="mt-3 font-[family:var(--font-display)] text-2xl text-slate-900">
                    {withoutPunctuation("Britain First")}
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--page-border)] bg-[var(--page-panel)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--page-muted)]">
                    {withoutPunctuation("Big Idea")}
                  </p>
                  <p className="mt-3 font-[family:var(--font-display)] text-2xl text-slate-900">
                    {withoutPunctuation("Innovation and Change")}
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
              <nav className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-5">
                <h2 className="font-[family:var(--font-display)] text-2xl text-slate-900">
                  {withoutPunctuation("On This Page")}
                </h2>
                <ul className="mt-4 space-y-3 text-base text-slate-700">
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block rounded-xl border border-transparent px-3 py-2 transition hover:border-[var(--page-border)] hover:bg-[#f2ece2] hover:text-slate-900"
                      >
                        {withoutPunctuation(link.label)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <section className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-5">
                <h2 className="font-[family:var(--font-display)] text-2xl text-slate-900">
                  {withoutPunctuation("Project Snapshot")}
                </h2>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.18em] text-[var(--page-muted)]">
                      {withoutPunctuation("Theme Focus")}
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-slate-700">
                      {withoutPunctuation(
                        "Industrial growth changed production work and everyday life."
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.18em] text-[var(--page-muted)]">
                      {withoutPunctuation("Historical Argument")}
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-slate-700">
                      {withoutPunctuation(
                        "New technology helped people make more goods but it also created social problems that led to reform."
                      )}
                    </dd>
                  </div>
                </dl>
              </section>
            </aside>
          </div>
        </div>
      </header>

      <section id="overview" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--page-accent)]">
              {withoutPunctuation("Overview")}
            </p>
            <h2 className="mt-2 font-[family:var(--font-display)] text-4xl text-slate-900">
              {withoutPunctuation("Why This Period Matters")}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6">
              <h3 className="font-[family:var(--font-display)] text-3xl text-slate-900">
                {withoutPunctuation("Theme Focus")}
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                {withoutPunctuation(
                  "The Industrial Revolution was a time of fast change in technology the economy and society. Machines factories and new transportation systems made production faster but they also changed family life work and the growth of cities."
                )}
              </p>
            </section>

            <section className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6">
              <h3 className="font-[family:var(--font-display)] text-3xl text-slate-900">
                {withoutPunctuation("Historical Argument")}
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                {withoutPunctuation(
                  "The Industrial Revolution changed the modern world because inventions helped people make more goods and connect markets but those same changes also created hard working conditions crowded cities and pressure for reform."
                )}
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-24 border-y border-[var(--page-border)] bg-[#f8f5ee]/85">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--page-accent)]">
                {withoutPunctuation("Timeline")}
              </p>
              <h2 className="mt-2 font-[family:var(--font-display)] text-4xl text-slate-900">
                {withoutPunctuation("Major Events in Chronological Order")}
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              {withoutPunctuation(
                "Each entry explains what happened why it mattered and how one change led to another."
              )}
            </p>
          </div>

          <div className="relative mt-8 space-y-6 md:pl-4">
            <div className="absolute bottom-0 left-[0.7rem] top-0 hidden w-px bg-[#cdd7e0] md:block" />
            {events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="connections" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--page-accent)]">
              {withoutPunctuation("Key Connections")}
            </p>
            <h2 className="mt-2 font-[family:var(--font-display)] text-4xl text-slate-900">
              {withoutPunctuation("How the Events Connect")}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6">
              <h3 className="font-[family:var(--font-display)] text-3xl text-slate-900">
                {withoutPunctuation("Earlier Changes Led to Later Developments")}
              </h3>
              <ul className="mt-5 space-y-3 text-lg leading-8 text-slate-700">
                <li>{withoutPunctuation("Better farming supported population growth and created more available workers.")}</li>
                <li>{withoutPunctuation("New machines helped factories replace work done by hand.")}</li>
                <li>{withoutPunctuation("Factories created more demand for steam power mining and transportation.")}</li>
                <li>{withoutPunctuation("Railroads linked resources factories ports and markets faster.")}</li>
                <li>{withoutPunctuation("City growth and harsh working conditions increased pressure for reform.")}</li>
              </ul>
            </section>

            <section className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6">
              <h3 className="font-[family:var(--font-display)] text-3xl text-slate-900">
                {withoutPunctuation("Why the Industrial Revolution Still Matters")}
              </h3>
              <ul className="mt-5 space-y-3 text-lg leading-8 text-slate-700">
                <li>{withoutPunctuation("Modern factory systems and mass production began during this time.")}</li>
                <li>{withoutPunctuation("Transportation networks grew because industry depended on them.")}</li>
                <li>{withoutPunctuation("Labor laws and workplace protections developed in response to abuse.")}</li>
                <li>{withoutPunctuation("Modern capitalism city life and social classes were shaped by it.")}</li>
                <li>{withoutPunctuation("New technology still creates similar benefits and social challenges today.")}</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section id="conclusion" className="scroll-mt-24 border-t border-[var(--page-border)] bg-[#f8f4ec]/80">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-12">
          <div className="rounded-[1.75rem] border border-[var(--page-border)] bg-[var(--page-panel)] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--page-accent)]">
              {withoutPunctuation("Conclusion")}
            </p>
            <h2 className="mt-2 font-[family:var(--font-display)] text-4xl text-slate-900">
              {withoutPunctuation("Industrialization Changed More Than Machines")}
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
              {withoutPunctuation(
                "The Industrial Revolution changed the modern world by changing production transportation cities and social classes. It created new wealth and new technology but it also exposed inequality and pushed societies to respond with reform. Its effects can still be seen in factories labor systems transportation networks and the way technology continues to change everyday life."
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
