import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Team from "@/components/Team";
import SectionDivider from "@/components/SectionDivider";
import Courses from "@/components/Courses";
import Services from "@/components/Services";
import Methods from "@/components/Methods";
import BookingForm from "@/components/BookingForm";
import OpeningHours from "@/components/OpeningHours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Header />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <Testimonials />
        <About />
        <Team />
        <SectionDivider />
        <Courses />
        <Services />
        <Methods />
        <BookingForm />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
