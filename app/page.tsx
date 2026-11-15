import Image, { getImageProps } from "next/image";
import type { ReactNode } from "react";
import { ContactForm, Details, Header } from "./interactions";

const categories = [
  { name: "Product Design", description: "Turn complex problems into clear, useful experiences." },
  { name: "Technology", description: "Build a stronger understanding of the tools shaping digital products." },
  { name: "Business", description: "Develop practical skills for better decisions and stronger teams." },
  { name: "Creative", description: "Explore new ways to communicate, create and tell stories." },
];

const steps = [
  { name: "Choose your focus", description: "Find courses based on the skill you want to build, not endless content categories." },
  { name: "Learn from experience", description: "Follow concise lessons created by professionals who use these skills." },
  { name: "Put it into practice", description: "Every course includes practical exercises designed to turn knowledge into action." },
];

const stats = [
  ["24K+", "active learners"],
  ["120+", "expert-led courses"],
  ["92%", "complete their first course"],
];

const footerGroups = [
  { name: "Explore", links: [["Courses", "#courses"], ["Categories", "#categories"], ["Instructors", "#community"], ["For Teams", "#contact"]] },
  { name: "Company", links: [["About", "#how-it-works"], ["Careers", "#contact"], ["Journal", "#community"]] },
  { name: "Support", links: [["Help Center", "#contact"], ["Contact", "#contact"], ["Terms", "#contact"], ["Privacy", "#contact"]] },
];

const trustedAvatars = [1, 2, 3].map((index) => `/images/trusted-learner-${index}.png`);
const ctaAvatars = [1, 2, 3, 4].map((index) => `/images/cta-learner-${index}.png`);

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

function Avatars({ sources, size = 32 }: { sources: string[]; size?: number }) {
  return <span className="avatars" aria-hidden="true">
    {sources.map((source) => (
      <Image key={source} src={source} alt="" width={size} height={size} />
    ))}
  </span>;
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function SectionIntro({ eyebrow, title, description, heading: Heading = "h2" }: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  heading?: "h1" | "h2";
}) {
  return (
    <>
      <p className="eyebrow uppercase-label">{eyebrow}</p>
      <Heading className="font-jakarta">{title}</Heading>
      <p className="lede font-inter text-lg/7 font-normal tracking-normal">{description}</p>
    </>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
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
                    <br className="hidden min-[58rem]:block" />{" "}every day. Learn design, technology, business and more
                    <br className="hidden min-[58rem]:block" />{" "}— one focused lesson at a time.
                  </>
                }
              />
              <div className="actions">
                <a className="button button-standard hero-button primary" href="#courses">Explore courses</a>
                <a className="button button-standard hero-button secondary" href="#how-it-works">See how it works</a>
              </div>
              <div className="trust"><Avatars sources={trustedAvatars} /><span><strong>Trusted by 24,000+</strong> learners</span></div>
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

        <section className="section" id="courses">
          <div className="container">
            <div className="intro">
              <SectionIntro
                eyebrow="Find your next skill"
                title="Learn something worth knowing."
                description="Short, practical courses designed around skills you can put to work immediately."
              />
            </div>
            <ul className="category-grid" id="categories">
              {categories.map(({ name, description }, index) => (
                <li className="category" key={name}>
                  <span className="number uppercase-label">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-jakarta text-xl/8 font-bold tracking-normal">{name}</h3>
                  <p className="body-1">{description}</p>
                  {index === 0 ? <a className="text-link" href="#featured" aria-label="Explore Product Design">Explore <Arrow /></a> :
                    <Details title={name} description={`${description} Contact us to learn more about these courses.`} className="text-link">
                      Explore <span className="sr-only">{name}</span> <Arrow />
                    </Details>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section featured" id="featured">
          <div className="container split">
            <div className="course-media">
              <Image src="/images/course.png" alt="Designer assembling prototypes at a worktable" width={538} height={408} sizes="(min-width: 58rem) 42vw, 90vw" />
              <span className="eyebrow course-label uppercase-label">Featured course</span>
            </div>
            <div>
              <p className="eyebrow uppercase-label">Most popular this month</p>
              <h2 className="font-jakarta font-extrabold tracking-[-1.2px] min-[58rem]:text-5xl/14">Designing products people understand.</h2>
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

        <section className="section cream" id="how-it-works">
          <div className="container">
            <div className="center">
              <p className="eyebrow uppercase-label">How Luma works</p>
              <h2 className="font-jakarta font-extrabold tracking-[-1.2px] min-[58rem]:text-5xl/14">Less browsing. More learning.</h2>
            </div>
            <ol className="steps">
              {steps.map(({ name, description }, index) => <li key={name}>
                <span className={`step-icon step-${index + 1}`} aria-hidden="true" />
                <p className="eyebrow step-label uppercase-label">Step 0{index + 1}</p>
                <h3 className="font-jakarta text-xl/8 font-bold tracking-normal">{name}</h3>
                <p className="font-inter text-base/7 font-normal tracking-normal">{description}</p>
              </li>)}
            </ol>
          </div>
        </section>

        <section className="section testimonial" aria-label="Learner testimonial and statistics">
          <div className="container proof">
            <figure>
              <Image src="/images/testimonial-quote.svg" alt="" width={24} height={22} className="mb-4" />
              <blockquote className="font-jakarta font-semibold tracking-[-0.75px] min-[58rem]:text-3xl/11">
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
                  <dd className="font-jakarta font-extrabold min-[58rem]:text-display">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section cream" id="community">
          <div className="container split">
            <div>
              <SectionIntro
                eyebrow="The people"
                title="Meet international students & teachers"
                description="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer."
              />
              <Details
                title="Explore teachers and students"
                description="Connect with Luma to learn about our international community or ask about teaching a course."
                className="button button-standard secondary px-7 py-3.5"
              >
                Explore teachers and students
              </Details>
            </div>
            <Image className="community-image" src="/images/community.png" alt="Collage of international students and teachers learning and working together" width={535} height={530} sizes="(min-width: 58rem) 42vw, 90vw" />
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container split">
            <div className="contact-copy">
              <SectionIntro
                eyebrow="Contact"
                title="Get in touch"
                description="Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you."
              />
              <div className="contact-info body-1">
                <div>
                  <span className="info-icon"><Image src="/images/contact-email.svg" alt="" width={24} height={24} /></span>
                  <p>Email <a href="mailto:contact@luma.com">contact@luma.com</a></p>
                </div>
                <div>
                  <span className="info-icon"><Image src="/images/contact-response-time.svg" alt="" width={20} height={20} /></span>
                  <p>Response Time <span>Up to 24 hours on business days</span></p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section final-cta center">
          <div className="container">
            <Avatars sources={ctaAvatars} size={40} />
            <h2 className="font-jakarta font-extrabold tracking-[-1.4px] min-[58rem]:text-[3.5rem]/16">What will you learn next?</h2>
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
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="logo inline-flex" aria-label="Luma home">
                <Image src="/images/luma-logo.svg" alt="" width={54} height={17} className="brightness-0 invert" />
              </a>
              <p className="body-1">Practical learning for curious people.</p>
            </div>
            {footerGroups.map(({ name, links }) => (
              <nav aria-label={name} key={name}>
                <h2 className="uppercase-label">{name}</h2>
                <ul className="body-1">
                  {links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
                </ul>
              </nav>
            ))}
          </div>
          <p className="copyright font-inter text-[13px]/[19.5px] font-normal tracking-normal">© 2026 Luma Learning</p>
        </div>
      </footer>
    </>
  );
}
