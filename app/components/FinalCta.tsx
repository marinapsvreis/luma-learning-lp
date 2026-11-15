import { Avatars } from "./Avatars";
import { Details } from "./Details";

const ctaAvatars = [1, 2, 3, 4].map((index) => `/images/cta-learner-${index}.png`);

export function FinalCta() {
  return (
    <section className="section section-spacing final-cta center">
      <div className="container">
        <Avatars sources={ctaAvatars} size={40} />
        <h2 className="font-jakarta font-extrabold tracking-[-1.4px] desktop:text-[3.5rem]/16">What will you learn next?</h2>
        <p className="lede font-inter text-lg/7 font-normal tracking-normal">Start with one course. Build from there.</p>
        <div className="actions">
          <a className="button button-standard primary px-7 py-3.5" href="#courses">Explore all courses</a>
          <Details
            title="Join Luma"
            description="Start with an expert-led course or get in touch to ask how to join the Luma learning community."
            className="button button-standard secondary px-7 py-3.5"
          >
            Join Luma
          </Details>
        </div>
      </div>
    </section>
  );
}
