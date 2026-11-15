import { Arrow } from "./Arrow";
import { Details } from "./Details";
import { SectionIntro } from "./SectionIntro";

const categories = [
  { name: "Product Design", description: "Turn complex problems into clear, useful experiences." },
  { name: "Technology", description: "Build a stronger understanding of the tools shaping digital products." },
  { name: "Business", description: "Develop practical skills for better decisions and stronger teams." },
  { name: "Creative", description: "Explore new ways to communicate, create and tell stories." },
];

export function Categories() {
  return (
    <section className="section section-spacing" id="courses">
      <div className="container">
        <div className="intro">
          <SectionIntro
            eyebrow="Find your next skill"
            title="Learn something worth knowing."
            description="Short, practical courses designed around skills you can put to work immediately."
          />
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 desktop:max-w-[1120px] desktop:grid-cols-4 desktop:gap-5" id="categories">
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
  );
}
