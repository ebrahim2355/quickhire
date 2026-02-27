import Categories from "@/components/home/Categories";
import Companies from "@/components/home/Companies";
import FeaturesJobs from "@/components/home/FeaturesJobs";
import Hero from "@/components/home/Hero";
import JobPostSection from "@/components/home/JobPostSection";
import LatestJobs from "@/components/home/LatestJobs";

export default function Home() {
  return (
    <div className="quickhire-shell min-h-screen">
      <main>
        <Hero />
        <Companies />
        <Categories />
        <JobPostSection />
        <FeaturesJobs />
        <LatestJobs />
      </main>
    </div>
  );
}
