import Image from "next/image";
import { Details } from "./Details";
import { SectionIntro } from "./SectionIntro";

export function Community() {
  return (
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
            className="button button-standard secondary mt-5 px-7 py-3.5"
          >
            Explore teachers and students
          </Details>
        </div>
        <Image className="h-auto w-full rounded-lg" src="/images/community.png" alt="Collage of international students and teachers learning and working together" width={535} height={530} sizes="(min-width: 58rem) 42vw, 90vw" />
      </div>
    </section>
  );
}
