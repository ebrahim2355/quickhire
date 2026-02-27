const jobs = [
  {
    company: "Revolut",
    role: "Email Marketing",
    location: "Madrid, Spain",
    excerpt: "Revolut is looking for Email Marketing to help team ma ...",
    type: "Full Time",
    tags: ["Marketing", "Design"],
    logo: "R",
  },
  {
    company: "Dropbox",
    role: "Brand Designer",
    location: "San Fransisco, US",
    excerpt: "Dropbox is looking for Brand Designer to help the team t ...",
    type: "Full Time",
    tags: ["Design", "Business"],
    logo: "◆◆",
  },
  {
    company: "Pitch",
    role: "Email Marketing",
    location: "Berlin, Germany",
    excerpt: "Pitch is looking for Customer Manager to join marketing t ...",
    type: "Full Time",
    tags: ["Marketing"],
    logo: "P",
  },
  {
    company: "Blinkist",
    role: "Visual Designer",
    location: "Granada, Spain",
    excerpt: "Blinkist is looking for Visual Designer to help team desi ...",
    type: "Full Time",
    tags: ["Design"],
    logo: "B",
  },
  {
    company: "ClassPass",
    role: "Product Designer",
    location: "Manchester, UK",
    excerpt: "ClassPass is looking for Product Designer to help us ...",
    type: "Full Time",
    tags: ["Marketing", "Design"],
    logo: "C",
  },
  {
    company: "Canva",
    role: "Lead Designer",
    location: "Ontario, Canada",
    excerpt: "Canva is looking for Lead Engineer to help develop n ...",
    type: "Full Time",
    tags: ["Design", "Business"],
    logo: "Ca",
  },
  {
    company: "GoDaddy",
    role: "Brand Strategist",
    location: "Marseille, France",
    excerpt: "GoDaddy is looking for Brand Strategist to join the team ...",
    type: "Full Time",
    tags: ["Marketing"],
    logo: "G",
  },
  {
    company: "Twitter",
    role: "Data Analyst",
    location: "San Diego, US",
    excerpt: "Twitter is looking for Data Analyst to help team desi ...",
    type: "Full Time",
    tags: ["Technology"],
    logo: "T",
  },
];

export default function FeaturedJob() {
  return (
    <section className="mx-auto w-full max-w-7xl px-3 pb-14 md:px-8 md:pb-20">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-[#1f2a44]">
          Featured <span className="text-[#2a97f4]">jobs</span>
        </h2>
        <a
          href="#"
          className="hidden items-center gap-2 text-xs font-semibold text-[#3a3fe0] md:inline-flex"
        >
          Show all jobs <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:overflow-visible md:pr-0">
        {jobs.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="min-w-[86%] snap-start border border-[#dde3f0] bg-white p-4 sm:min-w-[70%] md:min-w-0"
          >
            <div className="flex items-start justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f6ff] text-sm font-bold text-[#1f2a44]">
                {job.logo}
              </span>
              <span className="border border-[#7b7ff0] px-2 py-1 text-xs text-[#3a3fe0]">
                {job.type}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-extrabold tracking-[-0.02em] text-[#1f2a44]">
              {job.role}
            </h3>
            <p className="mt-1 text-xs text-[#8e99b1]">
              {job.company} &middot; {job.location}
            </p>
            <p className="mt-3 line-clamp-2 text-sm text-[#8e99b1]">{job.excerpt}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={`${job.role}-${tag}`}
                  className={`rounded-full px-3 py-1 text-xs ${
                    tag === "Marketing"
                      ? "bg-[#ffe8bf] text-[#c78b2f]"
                      : tag === "Business"
                        ? "bg-[#e6e8ff] text-[#4f53d9]"
                        : tag === "Technology"
                          ? "bg-[#ffe2de] text-[#d76f62]"
                          : "bg-[#ddf7ea] text-[#29a778]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
