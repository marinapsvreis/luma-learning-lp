import { Categories } from "./components/sections/Categories/Categories";
import { Community } from "./components/sections/Community/Community";
import { Contact } from "./components/sections/Contact/Contact";
import { FeaturedCourse } from "./components/sections/FeaturedCourse/FeaturedCourse";
import { FinalCta } from "./components/sections/FinalCta/FinalCta";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/sections/Hero/Hero";
import { HowItWorks } from "./components/sections/HowItWorks/HowItWorks";
import { Testimonial } from "./components/sections/Testimonial/Testimonial";
import type { Locale } from "./locale";
import { messages } from "./page.copy";

export function LandingPage({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skipToContent}
      </a>
      <Header locale={locale} />
      <main id="main" tabIndex={-1}>
        <Hero locale={locale} />
        <Categories locale={locale} />
        <FeaturedCourse locale={locale} />
        <HowItWorks locale={locale} />
        <Testimonial locale={locale} />
        <Community locale={locale} />
        <Contact locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
