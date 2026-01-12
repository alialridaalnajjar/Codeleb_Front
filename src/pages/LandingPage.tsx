import Courses from "../components/Landing/Courses";
import CTASection from "../components/Landing/CTA";
import Faq from "../components/Landing/Faq";
import WelcomeSection from "../components/Landing/Welcome";
import WhyChooseUs from "../components/Landing/Why-choose-us";
import Footer from "../components/Reusable/Footer";
import Navbar from "../components/Reusable/Navbar";
import useAuthCookies from "../utils/UseAuth";
export default function LandingPage() {
  const { isAuthenticated } = useAuthCookies();
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <Courses />
      <WhyChooseUs />
      <Faq />
      {isAuthenticated || <CTASection />}
      <Footer />
    </>
  );
}
