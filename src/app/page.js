import Categories from "@/components/home/Categories";
import Companies from "@/components/home/Companies";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="quickhire-shell min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <Categories />
      </main>
    </div>
  );
}
