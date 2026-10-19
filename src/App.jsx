import { useEffect, useState } from "react";
import {
  ContactSection,
  HeroSection,
  JourneySection,
  LabsSection,
  ProjectsSection,
  SiteFooter,
  SiteHeader,
  SkillsSection,
} from "./components/PortfolioSections.jsx";
import { getPortfolio } from "./services/api.js";
import { fallbackPortfolio } from "./data/portfolioFallback.js";

export default function App() {
  const [portfolio, setPortfolio] = useState(fallbackPortfolio);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    getPortfolio(controller.signal)
      .then((data) => setPortfolio(data))
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          setPortfolio(fallbackPortfolio);
          setError(true);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".section-block, .contact").forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".section-block, .contact").forEach((section) => {
      section.classList.add("reveal-ready");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ambient-grid" aria-hidden="true" />
      <SiteHeader />
      <main>
        <HeroSection />
        <JourneySection />
        <SkillsSection />
        <LabsSection labs={portfolio.labs} writeups={portfolio.writeups} loading={loading} error={error} />
        <ProjectsSection projects={portfolio.projects} loading={loading} />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
