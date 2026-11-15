import { Avatars } from "../../shared/Avatars/Avatars";
import { Details } from "../../shared/Details/Details";
import type { Locale } from "../../../locale";
import { messages } from "./FinalCta.copy";

const ctaAvatars = [1, 2, 3, 4].map(
  (index) => `/images/cta-learner-${index}.png`,
);

export function FinalCta({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <section className="section section-spacing final-cta center">
      <div className="container">
        <Avatars sources={ctaAvatars} size={40} />
        <h2 className="font-jakarta font-extrabold tracking-[-1.4px] desktop:text-[3.5rem]/16">
          {copy.title}
        </h2>
        <p className="lede font-inter text-lg/7 font-normal tracking-normal">
          {copy.description}
        </p>
        <div className="actions">
          <a
            className="button button-standard primary px-7 py-3.5"
            href="#courses"
          >
            {copy.browse}
          </a>
          <Details
            locale={locale}
            title={copy.join}
            description={copy.joinDescription}
            className="button button-standard secondary px-7 py-3.5"
          >
            {copy.join}
          </Details>
        </div>
      </div>
    </section>
  );
}
