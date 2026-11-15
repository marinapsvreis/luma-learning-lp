import { Arrow } from "../../shared/Arrow/Arrow";
import { Details } from "../../shared/Details/Details";
import { SectionIntro } from "../../shared/SectionIntro/SectionIntro";
import type { Locale } from "../../../locale";
import { messages } from "./Categories.copy";

export function Categories({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <section className="section section-spacing" id="courses">
      <div className="container">
        <div className="intro">
          <SectionIntro
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 desktop:max-w-[1120px] desktop:grid-cols-4 desktop:gap-5" id="categories">
          {copy.categories.map(({ name, description }, index) => (
            <li className="category" key={name}>
              <span className="number uppercase-label">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-jakarta text-xl/8 font-bold tracking-normal">{name}</h3>
              <p className="body-1">{description}</p>
              {index === 0 ? <a className="text-link" href="#featured" aria-label={copy.exploreProductDesign}>{copy.explore}{" "}<Arrow /></a> :
                <Details locale={locale} title={name} description={`${description} ${copy.dialogDescription}`} className="text-link">
                  {copy.explore}{" "}<span className="sr-only">{name}</span> <Arrow />
                </Details>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
