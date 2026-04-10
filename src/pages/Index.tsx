import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Testimonials from "@/components/Testimonials";
import InterSectionDecor from "@/components/InterSectionDecor";
import About from "@/components/About";
import Team from "@/components/Team";
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
        <InterSectionDecor align="right" hue="primary" />
        <Problems />
        <InterSectionDecor align="left" hue="accent" />
        <Testimonials />
        <InterSectionDecor align="right" hue="accent" />
        <About />
        <Team />
        <InterSectionDecor align="left" hue="primary" />
        <Courses />
        <Services />
        <InterSectionDecor align="right" hue="primary" />
        <Methods />
        <BookingForm />
        <InterSectionDecor align="left" hue="accent" />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
