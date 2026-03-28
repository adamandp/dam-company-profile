import { AboutUsSection } from "./components/about-us-section";
import FAQSection from "./components/faq-section";
import FooterSection from "./components/footer-section";
import { MainSection } from "./components/main-section";
import { ReviewSection } from "./components/reviews-section";
import { ServicesSection } from "./components/services-section";

function App() {
  return (
    <main className="mx-auto bg-[#171717] min-h-screen overflow-x-hidden text-white">
      <MainSection />
      <AboutUsSection />
      <div className="bg-[#4271FF]">
        <ServicesSection />
        <ReviewSection />
        <FAQSection />
      </div>
      <FooterSection />
    </main>
  );
}

export default App;
