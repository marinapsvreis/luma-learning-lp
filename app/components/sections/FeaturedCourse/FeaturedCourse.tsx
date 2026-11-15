import Image from "next/image";
import { Arrow } from "../../shared/Arrow/Arrow";
import { Details } from "../../shared/Details/Details";
import type { Locale } from "../../../locale";
import { messages } from "./FeaturedCourse.copy";

export function FeaturedCourse({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <section className="section section-spacing featured" id="featured">
      <div className="container split">
        <div className="course-media">
          <Image src="/images/course.png" alt={copy.imageAlt} width={538} height={408} sizes="(min-width: 58rem) 42vw, 90vw" />
          <span className="eyebrow course-label uppercase-label">{copy.badge}</span>
        </div>
        <div>
          <p className="eyebrow uppercase-label">{copy.eyebrow}</p>
          <h2 className="font-jakarta font-extrabold tracking-[-1.2px] desktop:text-section-title">{copy.title}</h2>
          <p className="font-inter text-base/7 font-normal tracking-normal">{copy.description}</p>
          <p className="font-inter text-base/7 font-normal tracking-normal">{copy.instructor}</p>
          <ul className="course-meta body-1">{copy.metadata.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="actions">
            <Details locale={locale} title={copy.title} description={copy.courseDetails} className="button yellow px-7 py-3.5">{copy.viewCourse}</Details>
            <a href="#courses" className="text-link font-inter text-body-1 font-bold tracking-normal text-center">{copy.browse}{" "}<Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
