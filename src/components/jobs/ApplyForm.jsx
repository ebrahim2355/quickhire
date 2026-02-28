"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api";
import toast from "react-hot-toast";

export default function ApplyForm({ jobId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeLink: "",
    coverNote: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await apiFetch("/api/applications", {
        method: "POST",
        body: JSON.stringify({ ...formData, jobId }),
      });
      toast.success("Application submitted successfully.");
      setFormData({
        name: "",
        email: "",
        resumeLink: "",
        coverNote: "",
      });
    } catch (submitError) {
      toast.error(submitError.message || "Failed to submit application.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-[#1f2a44]">
        Apply Now
      </h2>
      <p className="text-sm text-[#8e99b1]">
        Fill in your details and submit your application in less than a minute.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="h-11 rounded-md border border-[#e3eaf7] bg-white px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
        />
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="h-11 rounded-md border border-[#e3eaf7] bg-white px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
        />
      </div>

      <input
        name="resumeLink"
        type="url"
        required
        value={formData.resumeLink}
        onChange={handleChange}
        placeholder="Resume link (URL)"
        className="h-11 rounded-md border border-[#e3eaf7] bg-white px-3 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
      />
      <textarea
        name="coverNote"
        required
        value={formData.coverNote}
        onChange={handleChange}
        placeholder="Cover note"
        rows={5}
        className="rounded-md border border-[#e3eaf7] bg-white px-3 py-2 text-sm text-[#1f2a44] outline-none focus:border-[#3a3fe0]"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-11 rounded-md bg-[#3a3fe0] px-4 text-sm font-semibold text-white transition hover:bg-[#2f35d1] disabled:opacity-60 cursor-pointer"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
