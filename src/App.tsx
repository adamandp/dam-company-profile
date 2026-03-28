import { AboutUsSection } from "./components/about-us-section";
import { MainSection } from "./components/main-section";

function App() {
  return (
    <main className="mx-auto bg-[#171717] min-h-screen overflow-x-hidden text-white">
      <MainSection />
      <AboutUsSection />
    </main>
  );
}

export default App;
