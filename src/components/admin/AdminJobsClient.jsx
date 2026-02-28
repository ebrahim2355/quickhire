"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api";
import toast from "react-hot-toast";

export default function AdminJobsClient({ initialJobs }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [pendingDeleteId, setPendingDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleCreate(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiFetch("/api/jobs", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const createdId = response.data?.insertedId;
      const createdJob = createdId
        ? { ...formData, _id: createdId }
        : { ...formData, _id: `temp-${Date.now()}` };

      setJobs((prev) => [createdJob, ...prev]);
      setFormData({
        title: "",
        company: "",
        location: "",
        category: "",
        description: "",
      });
      toast.success("Job created successfully.");
    } catch (createError) {
      toast.error(createError.message || "Failed to create job");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleDeleteRequest(id) {
    setPendingDeleteId(id);
  }

  async function handleDeleteConfirm() {
    if (!pendingDeleteId) return;
    try {
      await apiFetch(`/api/jobs/${pendingDeleteId}`, { method: "DELETE" });
      setJobs((prev) => prev.filter((job) => job._id !== pendingDeleteId));
      toast.success("Job deleted.");
    } catch (deleteError) {
      toast.error(deleteError.message || "Failed to delete job");
    } finally {
      setPendingDeleteId(null);
    }
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-10 md:px-8 md:py-14">
      <div className="rounded-2xl border border-[#dbe3f5] bg-gradient-to-br from-[#f7f9ff] to-[#eef4ff] p-5 md:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-[-0.02em] text-[#1f2a44] md:text-4xl">
              Admin Jobs
            </h1>
            <p className="mt-2 text-sm text-[#8e99b1]">
              Create and delete job listings.
            </p>
          </div>
          <span className="rounded-full border border-[#ced8f3] bg-white px-3 py-1 text-xs font-semibold text-[#4d5a73]">
            {jobs.length} total jobs
          </span>
        </div>

        <form
          onSubmit={handleCreate}
          className="grid gap-3 rounded-xl border border-[#dde3f0] bg-white p-4 shadow-[0_12px_35px_rgba(40,66,134,0.08)] md:grid-cols-2"
        >
          <input
            required
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="h-11 rounded-md border border-[#e3eaf7] px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
          />
          <input
            required
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="h-11 rounded-md border border-[#e3eaf7] px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
          />
          <input
            required
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="h-11 rounded-md border border-[#e3eaf7] px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
          />
          <input
            required
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="h-11 rounded-md border border-[#e3eaf7] px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
          />
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Description"
            className="rounded-md border border-[#e3eaf7] px-3 py-2 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0] md:col-span-2"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-11 rounded-md bg-[#3a3fe0] px-4 text-sm font-semibold text-white transition hover:bg-[#2f35d1] disabled:opacity-60 md:col-span-2 cursor-pointer"
          >
            {isSubmitting ? "Saving..." : "Add Job"}
          </button>
        </form>

        <div className="mt-6 grid gap-3">
          {jobs.map((job) => (
            <article
              key={job._id}
              className="flex flex-col md:flex-row items-start justify-between gap-4 rounded-xl border border-[#dde3f0] bg-white p-4 shadow-[0_6px_18px_rgba(34,56,112,0.06)]"
            >
              <div>
                <h2 className="text-lg font-extrabold text-[#1f2a44]">{job.title}</h2>
                <p className="mt-1 text-sm text-[#8e99b1]">
                  {job.company} &middot; {job.location} &middot; {job.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteRequest(job._id)}
                className="shrink-0 rounded-md bg-[#eb5757] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#d94a4a] cursor-pointer"
              >
                Delete
              </button>
            </article>
          ))}
        </div>
      </div>

      {pendingDeleteId ? (
        <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/45 px-4">
          <div className="w-full max-w-xl rounded-2xl border border-[#dbe3f5] bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:p-8">
            <h3 className="text-2xl font-extrabold text-[#1f2a44] md:text-3xl">Confirm Delete</h3>
            <p className="mt-3 text-sm text-[#6f7b98] md:text-base">
              Are you sure you want to delete this job listing? This action cannot be undone.
            </p>
            <div className="mt-7 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setPendingDeleteId(null);
                  toast("Delete cancelled");
                }}
                className="rounded-md border border-[#d5def3] px-4 py-2 text-sm font-semibold text-[#4d5a73] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="rounded-md bg-[#eb5757] px-4 py-2 text-sm font-semibold text-white hover:bg-[#d94a4a] cursor-pointer"
              >
                Delete Job
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
