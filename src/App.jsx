import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";

// Lazy load all sections except Hero (above the fold)
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Loading component
const SectionLoader = () => (
  <div className="flex-center" style={{ minHeight: "50vh" }}>
    <div className="animate-pulse text-white-50">Loading...</div>
  </div>
);

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Suspense fallback={<SectionLoader />}>
      <ShowcaseSection />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <LogoShowcase />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <FeatureCards />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Experience />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <TechStack />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Contact />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
  </>
);

export default App;
