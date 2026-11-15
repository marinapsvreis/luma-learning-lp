import Image, { getImageProps } from "next/image";
import { Avatars } from "./Avatars";
import { SectionIntro } from "./SectionIntro";

const trustedAvatars = [1, 2, 3].map((index) => `/images/trusted-learner-${index}.png`);

const heroAlt = "Learner working on a laptop";
const { props: mobileHero } = getImageProps({
  src: "/images/hero-mobile.png",
  alt: heroAlt,
  width: 346,
  height: 380,
  sizes: "min(90vw, 346px)",
  loading: "eager",
  fetchPriority: "high",
});
const { props: desktopHero } = getImageProps({
  src: "/images/hero.png",
  alt: heroAlt,
  width: 500,
  height: 520,
  sizes: "min(42vw, 500px)",
});

export function Hero() {
  return (
    <section className="hero cream">
      <div className="container split hero-inner">
        <div className="hero-copy">
          <SectionIntro
            eyebrow="Learn at your own pace"
            title="Build skills that actually move you forward."
            heading="h1"
            description={
              <>
                Practical courses taught by people who do the work
                <br className="hidden desktop:block" />{" "}every day. Learn design, technology, business and more
                <br className="hidden desktop:block" />{" "}— one focused lesson at a time.
              </>
            }
          />
          <div className="actions mt-8">
            <a className="button button-standard px-7 pt-3.5 pb-4 primary" href="#courses">Explore courses</a>
            <a className="button button-standard px-7 pt-3.5 pb-4 secondary" href="#how-it-works">See how it works</a>
          </div>
          <div className="trust mt-8"><Avatars sources={trustedAvatars} /><span><strong>Trusted by 24,000+</strong> learners</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-media">
            <div className="hero-photo">
              <picture>
                <source media="(min-width: 58rem)" srcSet={desktopHero.srcSet} sizes={desktopHero.sizes} />
                <img {...mobileHero} />
              </picture>
            </div>
            <div className="photo-label photo-courses body-1 gap-3">
              <strong>120+</strong> expert-led courses
            </div>
            <div className="photo-label photo-rating body-1">
              <Image src="/images/rating-stars.svg" alt="" width={78} height={14} />
              4.9 avg rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
