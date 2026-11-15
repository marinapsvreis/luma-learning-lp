import Image from "next/image";
import { Details } from "../../shared/Details/Details";
import { SectionIntro } from "../../shared/SectionIntro/SectionIntro";
import { copy } from "./Community.copy";

export function Community() {
  return (
    <section className="section cream" id="community">
      <div className="container split">
        <div>
          <SectionIntro
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <Details
            title={copy.explore}
            description={copy.dialogDescription}
            className="button button-standard secondary mt-5 px-7 py-3.5"
          >
            {copy.explore}
          </Details>
        </div>
        <Image className="h-auto w-full rounded-lg" src="/images/community.png" alt={copy.imageAlt} width={535} height={530} sizes="(min-width: 58rem) 42vw, 90vw" />
      </div>
    </section>
  );
}
