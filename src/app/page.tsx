import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroTaina from "@/components/sections/HeroTaina";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Quote from "@/components/sections/Quote";
import Testimonials from "@/components/sections/Testimonials";
import CaseUnique from "@/components/sections/CaseUnique";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroTaina />
        <Services />
        <Process />
        <About />
        <Quote />
        {/* <Testimonials /> */}
        <CaseUnique />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
