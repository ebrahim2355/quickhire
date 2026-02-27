import Categories from "@/components/home/Categories";
import Companies from "@/components/home/Companies";
import FeaturesJobs from "@/components/home/FeaturesJobs";
import Hero from "@/components/home/Hero";
import JobPostSection from "@/components/home/JobPostSection";
import LatestJobs from "@/components/home/LatestJobs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="quickhire-shell min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <Categories />
        <JobPostSection />
        <FeaturesJobs />
        <LatestJobs />
        <Footer />
      </main>
    </div>
  );
}
