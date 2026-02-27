import Link from "next/link";
import ApplyForm from "@/components/jobs/ApplyForm";
import { getApiBaseUrl } from "@/lib/api";

async function getJob(id) {
  const response = await fetch(`${getApiBaseUrl()}/api/jobs/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.data || null;
}

export default async function JobDetailsPage({ params }) {
  const { id } = await params;
  const job = await getJob(id);

  if (!job) {
    return (
      <section className="mx-auto w-full max-w-7xl px-3 py-10 md:px-8">
        <div className="rounded-xl border border-[#dde3f0] bg-white p-5">
          <p className="text-sm text-[#8e99b1]">Job not found.</p>
          <Link href="/jobs" className="mt-3 inline-block text-sm text-[#3a3fe0]">
            Back to jobs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-10 md:px-8 md:py-14">
      <div className="mb-4">
        <Link href="/jobs" className="text-sm font-semibold text-[#3a3fe0]">
          &lt;- Back to jobs
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-[#dde3f0] bg-white p-5 shadow-[0_10px_26px_rgba(34,56,112,0.08)] md:p-6">
          <span className="inline-flex rounded-full bg-[#eef3ff] px-2.5 py-1 text-[11px] font-semibold text-[#3a3fe0]">
            {job.category}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-[#1f2a44]">
            {job.title}
          </h1>
          <p className="mt-2 text-sm text-[#8e99b1]">
            {job.company} &middot; {job.location}
          </p>
          <p className="mt-5 whitespace-pre-wrap text-sm leading-7 text-[#4d5a73]">
            {job.description}
          </p>
        </div>

        <div className="rounded-2xl border border-[#dde3f0] bg-gradient-to-b from-[#f7f9ff] to-[#ffffff] p-5 shadow-[0_10px_26px_rgba(34,56,112,0.08)] md:p-6">
          <ApplyForm jobId={job._id} />
        </div>
      </div>
    </section>
  );
}
