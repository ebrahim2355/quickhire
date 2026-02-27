import AdminJobsClient from "@/components/admin/AdminJobsClient";
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

export default async function AdminJobsPage() {
  const jobs = await getJobs();
  return <AdminJobsClient initialJobs={jobs} />;
}
