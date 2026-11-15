import Image from "next/image";

const stats = [
  ["24K+", "active learners"],
  ["120+", "expert-led courses"],
  ["92%", "complete their first course"],
];

export function Testimonial() {
  return (
    <section className="section section-spacing testimonial" aria-label="Learner testimonial and statistics">
      <div className="container proof">
        <figure>
          <Image src="/images/testimonial-quote.svg" alt="" width={24} height={22} className="mb-4" />
          <blockquote className="font-jakarta font-semibold tracking-[-0.75px] desktop:text-3xl/11">
            The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.
          </blockquote>
          <figcaption>
            <Image src="/images/alex.png" alt="" width={48} height={48} />
            <span>
              <strong className="font-inter text-base/7 font-bold tracking-normal">Alex Morgan</strong>
              <span className="body-1">Product Manager</span>
            </span>
          </figcaption>
        </figure>
        <dl className="stats">
          {stats.map(([value, label]) => (
            <div key={label}>
              <dt className="body-1">{label}</dt>
              <dd className="font-jakarta font-extrabold desktop:text-display">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
