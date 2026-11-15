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
import { copy } from "./page.copy";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">{copy.skipToContent}</a>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Community />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
