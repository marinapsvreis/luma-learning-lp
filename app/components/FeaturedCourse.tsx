import Image from "next/image";
import { Arrow } from "./Arrow";
import { Details } from "./Details";

export function FeaturedCourse() {
  return (
    <section className="section section-spacing featured" id="featured">
      <div className="container split">
        <div className="course-media">
          <Image src="/images/course.png" alt="Designer assembling prototypes at a worktable" width={538} height={408} sizes="(min-width: 58rem) 42vw, 90vw" />
          <span className="eyebrow course-label uppercase-label">Featured course</span>
        </div>
        <div>
          <p className="eyebrow uppercase-label">Most popular this month</p>
          <h2 className="font-jakarta font-extrabold tracking-[-1.2px] desktop:text-section-title">Designing products people understand.</h2>
          <p className="font-inter text-base/7 font-normal tracking-normal">Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.</p>
          <p className="font-inter text-base/7 font-normal tracking-normal">with Maya Chen · Senior Product Designer</p>
          <ul className="course-meta body-1"><li>8 lessons</li><li>2h 40min</li><li>Intermediate</li></ul>
          <div className="actions">
            <Details title="Designing products people understand." description="Join Maya Chen for 8 intermediate lessons on product design, from research and workflow mapping to interaction design. Total duration 2h 40min." className="button yellow px-7 py-3.5">View course</Details>
            <a href="#courses" className="text-link font-inter text-body-1 font-bold tracking-normal text-center">Browse all courses <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
