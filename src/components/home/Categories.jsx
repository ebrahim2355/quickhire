const categories = [
  { name: "Design", jobs: 235, icon: "design" },
  { name: "Sales", jobs: 756, icon: "sales" },
  { name: "Marketing", jobs: 140, icon: "marketing", featured: true },
  { name: "Finance", jobs: 325, icon: "finance" },
  { name: "Technology", jobs: 436, icon: "technology" },
  { name: "Engineering", jobs: 542, icon: "engineering" },
  { name: "Business", jobs: 211, icon: "business" },
  { name: "Human Resource", jobs: 346, icon: "people" },
];

export default function Categories() {
  return (
    <section className="mx-auto w-full max-w-7xl px-3 pb-12 md:px-8 md:pb-16">
      <div className=" py-6 md:py-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-[#1f2a44]">
            Explore by <span className="text-[#2a97f4]">category</span>
          </h2>
          <a
            href="#"
            className="hidden items-center gap-2 text-xs font-semibold text-[#3a3fe0] md:inline-flex"
          >
            Show all jobs <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.name}
              className={`border px-4 py-4 ${
                category.featured
                  ? "border-[#3a3fe0] bg-[#3a3fe0] text-white"
                  : "border-[#dde3f0] bg-white text-[#1f2a44]"
              }`}
            >
              <div className="flex items-start gap-4 md:block md:gap-0">
                <span
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center md:h-12 md:w-12 ${
                    category.featured ? "text-white" : "text-[#3a3fe0]"
                  }`}
                >
                  <CategoryIcon type={category.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-extrabold tracking-[-0.02em] md:mt-5">
                    {category.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <p
                      className={
                        category.featured ? "text-[#d8ddff]" : "text-[#9aa3b7]"
                      }
                    >
                      {category.jobs} jobs available
                    </p>
                    <span
                      className={
                        category.featured ? "text-white" : "text-[#2c3550]"
                      }
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({ type }) {
  if (type === "design") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M6 7L17 18" stroke="currentColor" strokeWidth="2" />
        <path d="M16 5L19 8L8 19H5V16L16 5Z" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "sales") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 14V19M11 12V19M16 9V19" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "marketing") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M4 12H8L16 8V16L8 12V18H6V12H4V12Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "finance") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "technology") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 19H14" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "engineering") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" />
        <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" />
        <path d="M13 6L11 18" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "business") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="7" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 7V5H15V7" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M4 18C4 15.8 5.8 14 8 14" stroke="currentColor" strokeWidth="2" />
      <path d="M10 18C10 15.8 11.8 14 14 14" stroke="currentColor" strokeWidth="2" />
      <path d="M14 18C14 15.8 15.8 14 18 14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
