import Academics from "@/components/Academics";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Academics />
        <Experiences />
        <Process />
        <Footer />
      </div>
    </main>
  );
}
