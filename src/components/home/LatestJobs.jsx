
const latestJobs = [
    {
        company: "Nomad",
        role: "Social Media Assistant",
        location: "Paris, France",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: "N",
        logoClass: "bg-[#dff6ec] text-[#2eab79]",
    },
    {
        company: "Netlify",
        role: "Social Media Assistant",
        location: "Paris, France",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: "Ne",
        logoClass: "bg-[#e5fbff] text-[#19a7c0]",
    },
    {
        company: "Dropbox",
        role: "Brand Designer",
        location: "San Fransisco, USA",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: "D",
        logoClass: "bg-[#eaf2ff] text-[#2460df]",
    },
    {
        company: "Maze",
        role: "Brand Designer",
        location: "San Fransisco, USA",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: "M",
        logoClass: "bg-[#e8f0ff] text-[#2460df]",
    },
    {
        company: "Terraform",
        role: "Interactive Developer",
        location: "Hamburg, Germany",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: "T",
        logoClass: "bg-[#e8f9ff] text-[#2aafd3]",
    },
    {
        company: "Udacity",
        role: "Interactive Developer",
        location: "Hamburg, Germany",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: "U",
        logoClass: "bg-[#e4f8ff] text-[#1e9fce]",
    },
    {
        company: "Packer",
        role: "HR Manager",
        location: "Lucern, Switzerland",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: "P",
        logoClass: "bg-[#ffefe9] text-[#fb5f45]",
    },
    {
        company: "Webflow",
        role: "HR Manager",
        location: "Lucern, Switzerland",
        tags: ["Full-Time", "Marketing", "Design"],
        logo: "W",
        logoClass: "bg-[#e8ecff] text-[#4354eb]",
    },
];

export default function LatestJobs() {
    return (
        <section className="bg-[#f7f9ff]">
            <div className="mx-auto w-full max-w-7xl px-3 pb-0 md:px-6">
                <div className="relative overflow-hidden px-1 py-8 md:py-10">
                    <div className="absolute right-10 -top-5 hidden h-55 w-75 -rotate-25 border-2 border-[#e0e6f6] md:block" />
                    <div className="absolute right-0 top-35 hidden h-52.5 w-70 -rotate-25 border-2 border-[#e0e6f6] md:block" />

                    <div className="relative z-10 mb-5 flex items-center justify-between">
                        <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-[#1f2a44]">
                            Latest <span className="text-[#2a97f4]">jobs open</span>
                        </h2>
                        <a
                            href="#"
                            className="hidden items-center gap-2 text-xs font-semibold text-[#3a3fe0] md:inline-flex"
                        >
                            Show all jobs <span aria-hidden="true">-&gt;</span>
                        </a>
                    </div>

                    <div className="relative z-10 grid gap-3 md:grid-cols-2">
                        {latestJobs.map((job) => (
                            <article
                                key={`${job.company}-${job.role}`}
                                className="rounded bg-white px-4 py-3"
                            >
                                <div className="flex gap-3">
                                    <span
                                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-bold ${job.logoClass}`}
                                    >
                                        {job.logo}
                                    </span>
                                    <div className="min-w-0">
                                        <h3 className="truncate text-sm font-extrabold text-[#1f2a44]">
                                            {job.role}
                                        </h3>
                                        <p className="mt-1 text-xs text-[#8e99b1]">
                                            {job.company} &middot; {job.location}
                                        </p>
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {job.tags.map((tag) => (
                                                <span
                                                    key={`${job.role}-${job.company}-${tag}`}
                                                    className={`rounded-full px-2 py-0.5 text-[10px] ${tag === "Marketing"
                                                            ? "bg-[#ffe8bf] text-[#c78b2f]"
                                                            : tag === "Design"
                                                                ? "border border-[#7282ff] text-[#6a74e2]"
                                                                : "bg-[#dcf7ea] text-[#1fa473]"
                                                        }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
