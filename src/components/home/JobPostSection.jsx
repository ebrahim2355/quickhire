import Image from "next/image";

export default function JobPostSection() {
  return (
    <section className="mx-auto w-full max-w-7xl pb-10 md:px-8 md:pb-12">
      <div className="relative overflow-hidden bg-[#3f3fdc]">
        <div className="absolute left-0 top-0 h-0 w-0 border-r-120 border-t-60 border-r-transparent border-t-white" />
        <div className="absolute bottom-0 right-0 h-0 w-0 border-b-86 border-l-200 border-b-white border-l-transparent md:border-b-120 md:border-l-280" />

        <div className="grid items-center gap-6 px-5 py-8 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-10">
          <div className="relative z-10 text-white">
            <h2 className="max-w-xs text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-5xl text-center md:text-start mt-5">
              Start posting jobs today
            </h2>
            <p className="mt-4 text-sm text-[#d3d7ff] text-center md:text-start">
              Start posting jobs for only $10.
            </p>
            <button className="mt-5 h-11 bg-white px-6 text-sm font-semibold text-[#3f3fdc] w-full md:w-fit">
              Sign Up For Free
            </button>
          </div>

          <div className="relative z-10">
            <div className="relative aspect-video w-full overflow-hidden border border-[#c8ceff] bg-white/95 shadow-[0_12px_40px_rgba(9,13,90,0.26)]">
              <Image
                src="/jobPostSectionPic.png"
                alt="QuickHire dashboard preview"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 52vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
