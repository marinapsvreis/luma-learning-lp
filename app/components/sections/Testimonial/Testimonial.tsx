import Image from "next/image";
import type { Locale } from "../../../locale";
import { messages } from "./Testimonial.copy";

export function Testimonial({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <section
      className="section section-spacing testimonial"
      aria-label={copy.sectionLabel}
    >
      <div className="container proof">
        <figure>
          <Image
            src="/images/testimonial-quote.svg"
            alt=""
            width={24}
            height={22}
            className="mb-4"
          />
          <blockquote className="font-jakarta font-semibold tracking-[-0.75px] desktop:text-3xl/11">
            {copy.quote}
          </blockquote>
          <figcaption>
            <Image src="/images/alex.png" alt="" width={48} height={48} />
            <span>
              <strong className="font-inter text-base/7 font-bold tracking-normal">
                {copy.author}
              </strong>
              <span className="body-1">{copy.role}</span>
            </span>
          </figcaption>
        </figure>
        <dl className="stats">
          {copy.stats.map(([value, label]) => (
            <div key={label}>
              <dt className="body-1">{label}</dt>
              <dd className="font-jakarta font-extrabold desktop:text-display">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
