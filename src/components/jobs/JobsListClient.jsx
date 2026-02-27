"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function JobsListClient({ initialJobs, initialFilters = {} }) {
  const [search, setSearch] = useState(initialFilters.search || "");
  const [location, setLocation] = useState(initialFilters.location || "");
  const [category, setCategory] = useState(initialFilters.category || "");

  const categories = useMemo(() => {
    return [...new Set(initialJobs.map((job) => job.category).filter(Boolean))];
  }, [initialJobs]);

  const locations = useMemo(() => {
    return [...new Set(initialJobs.map((job) => job.location).filter(Boolean))];
  }, [initialJobs]);

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch = search
        ? `${job.title} ${job.company}`
            .toLowerCase()
            .includes(search.trim().toLowerCase())
        : true;
      const matchesLocation = location ? job.location === location : true;
      const matchesCategory = category ? job.category === category : true;
      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [initialJobs, search, location, category]);

  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-10 md:px-8 md:py-14">
      <div className="relative overflow-hidden rounded-2xl border border-[#dbe3f5] bg-gradient-to-br from-[#f7f9ff] via-[#ffffff] to-[#eef4ff] p-5 md:p-8">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#dfe6ff]/70 blur-2xl" />
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold tracking-[-0.02em] text-[#1f2a44] md:text-4xl">
              Job Listings
            </h1>
            <p className="mt-2 text-sm text-[#8e99b1]">
              Browse, search, and filter available roles.
            </p>
          </div>
          <span className="rounded-full border border-[#ced8f3] bg-white px-3 py-1 text-xs font-semibold text-[#4d5a73]">
            {filteredJobs.length} result{filteredJobs.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="mb-6 grid gap-3 rounded-xl border border-[#dfe6f5] bg-white p-3 shadow-[0_12px_35px_rgba(40,66,134,0.08)] md:grid-cols-4">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search title or company"
            className="h-11 rounded-md border border-[#e3eaf7] px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
          />
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="h-11 rounded-md border border-[#e3eaf7] px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
          >
            <option value="">All Locations</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-11 rounded-md border border-[#e3eaf7] px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
          >
            <option value="">All Categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setLocation("");
              setCategory("");
            }}
            className="h-11 rounded-md bg-[#3a3fe0] px-4 text-sm font-semibold text-white transition hover:bg-[#2f35d1]"
          >
            Clear Filters
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {filteredJobs.map((job) => (
            <article
              key={job._id}
              className="group rounded-xl border border-[#dde3f0] bg-white p-4 shadow-[0_6px_18px_rgba(34,56,112,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(34,56,112,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-[#eef3ff] px-2.5 py-1 text-[11px] font-semibold text-[#3a3fe0]">
                    {job.category}
                  </span>
                  <h2 className="mt-3 text-lg font-extrabold text-[#1f2a44]">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-sm text-[#8e99b1]">
                    {job.company} &middot; {job.location}
                  </p>
                </div>
                <Link
                  href={`/jobs/${job._id}`}
                  className="shrink-0 rounded-md bg-[#3a3fe0] px-3 py-2 text-xs font-semibold text-white transition group-hover:bg-[#2f35d1]"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredJobs.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#d3dbef] bg-white/90 px-4 py-8 text-center">
            <p className="text-sm text-[#8e99b1]">
              No jobs found for these filters.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
