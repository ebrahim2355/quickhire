import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-[#F8F8FD]">
            <div className="relative z-10 mx-auto w-full max-w-7xl  pt-4 md:pt-6 px-6 md:px-8">
                <div className="hero-panel relative overflow-hidden">
                    <div className="grid min-h-130 grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
                        <div className="relative z-10 flex flex-col justify-center py-8 md:py-10">
                            <h1 className="max-w-md text-[50px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#1f2a44] md:text-[56px]">
                                Discover <br /> more than{" "}
                                <span className="block text-[#2a97f4]">5000+ Jobs</span>
                            </h1>
                            <div className="hero-accent mt-2 h-4 w-56 md:w-64" />
                            <p className="mt-5 max-w-lg text-base leading-7 text-[#8e99b1]">
                                Great platform for the job seeker that searching for new career
                                heights and passionate about startups.
                            </p>

                            <div className="mt-7 border border-[#dfe6f5] bg-white p-2 w-full md:w-[120%] md:absolute top-110 rounded">
                                <div className="grid gap-1 md:grid-cols-[1.6fr_1.1fr_auto]">
                                    <label className="relative block">
                                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6d7891]">
                                            <SearchIcon />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Job title or keyword"
                                            className="h-11 w-full border-b border-[#eef2fb] pl-9 pr-3 text-sm text-[#1f2a44] outline-none placeholder:text-[#a3aec5] md:border-b-0 md:border-r"
                                        />
                                    </label>
                                    <label className="relative block">
                                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6d7891]">
                                            <PinIcon />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Florence, Italy"
                                            className="h-11 w-full border-b border-[#eef2fb] pl-9 pr-8 text-sm text-[#1f2a44] outline-none placeholder:text-[#a3aec5] md:border-b-0"
                                        />
                                        <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6d7891]">
                                            <ChevronIcon />
                                        </span>
                                    </label>
                                    <button className="h-11 bg-[#3a3fe0] px-5 text-sm font-semibold text-white">
                                        Search my job
                                    </button>
                                </div>
                            </div>

                            <p className="mt-3 text-xs text-[#8f99af]">
                                Popular : UI Designer, UX Researcher, Android, Admin
                            </p>
                        </div>

                        <div className="relative hidden items-end justify-center md:flex">
                            <div className="hero-geo hero-geo-one" />
                            <div className="hero-geo hero-geo-two" />
                            <div className="hero-geo hero-geo-three" />
                            <Image
                                src="/hero-img.png"
                                alt="Professional smiling candidate"
                                width={640}
                                height={760}
                                priority
                                className="hero-person relative z-10 h-auto w-105 max-w-none"
                            />
                        </div>
                    </div>
                    <div className="hero-slice top-130" />
                </div>
            </div>
        </section>
    );
}

function SearchIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20L16.6 16.6" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function PinIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 21C16 16.3 18 13.1 18 10.2C18 6.8 15.3 4 12 4C8.7 4 6 6.8 6 10.2C6 13.1 8 16.3 12 21Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle cx="12" cy="10" r="2.2" fill="currentColor" />
        </svg>
    );
}

function ChevronIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
