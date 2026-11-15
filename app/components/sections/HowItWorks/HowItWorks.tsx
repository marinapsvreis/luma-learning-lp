import type { Locale } from "../../../locale";
import { messages } from "./HowItWorks.copy";

export function HowItWorks({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <section className="section section-spacing cream" id="how-it-works">
      <div className="container">
        <div className="center">
          <p className="eyebrow uppercase-label">{copy.eyebrow}</p>
          <h2 className="font-jakarta font-extrabold tracking-[-1.2px] desktop:text-section-title">{copy.title}</h2>
        </div>
        <ol className="steps">
          {copy.steps.map(({ name, description }, index) => <li key={name}>
            <span className={`step-icon step-${index + 1}`} aria-hidden="true" />
            <p className="eyebrow step-label uppercase-label">{copy.stepLabels[index]}</p>
            <h3 className="font-jakarta text-xl/8 font-bold tracking-normal">{name}</h3>
            <p className="font-inter text-base/7 font-normal tracking-normal">{description}</p>
          </li>)}
        </ol>
      </div>
    </section>
  );
}
