import Image, { getImageProps } from "next/image";
import { Avatars } from "../../shared/Avatars/Avatars";
import { SectionIntro } from "../../shared/SectionIntro/SectionIntro";
import { copy } from "./Hero.copy";

const trustedAvatars = [1, 2, 3].map((index) => `/images/trusted-learner-${index}.png`);

const { props: mobileHero } = getImageProps({
  src: "/images/hero-mobile.png",
  alt: copy.imageAlt,
  width: 346,
  height: 380,
  sizes: "min(90vw, 346px)",
  loading: "eager",
  fetchPriority: "high",
});
const { props: desktopHero } = getImageProps({
  src: "/images/hero.png",
  alt: copy.imageAlt,
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
            eyebrow={copy.eyebrow}
            title={copy.title}
            heading="h1"
            description={
              <>
                {copy.descriptionLines[0]}
                <br className="hidden desktop:block" />{" "}{copy.descriptionLines[1]}
                <br className="hidden desktop:block" />{" "}{copy.descriptionLines[2]}
              </>
            }
          />
          <div className="actions mt-8">
            <a className="button button-standard px-7 pt-3.5 pb-4 primary" href="#courses">{copy.exploreCourses}</a>
            <a className="button button-standard px-7 pt-3.5 pb-4 secondary" href="#how-it-works">{copy.seeHowItWorks}</a>
          </div>
          <div className="trust mt-8"><Avatars sources={trustedAvatars} /><span><strong>{copy.trustedBy}</strong>{" "}{copy.learners}</span></div>
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
              <strong>{copy.courseCount}</strong>{" "}{copy.expertLedCourses}
            </div>
            <div className="photo-label photo-rating body-1">
              <Image src="/images/rating-stars.svg" alt="" width={78} height={14} />
              {copy.averageRating}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
