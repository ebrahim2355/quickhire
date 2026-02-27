import JobsListClient from "@/components/jobs/JobsListClient";
import { getApiBaseUrl } from "@/lib/api";

async function getJobs() {
  const response = await fetch(`${getApiBaseUrl()}/api/jobs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data.data || [];
}

export default async function JobsPage({ searchParams }) {
  const jobs = await getJobs();
  const filters = await searchParams;

  return <JobsListClient initialJobs={jobs} initialFilters={filters} />;
}
