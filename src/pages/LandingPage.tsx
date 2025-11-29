import Courses from "../components/Landing/Courses";
import CTASection from "../components/Landing/CTA";
import Faq from "../components/Landing/Faq";
import WhyChooseUs from "../components/Landing/Why-choose-us";
import Navbar from "../components/Reusable/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Courses />
      <Faq />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
