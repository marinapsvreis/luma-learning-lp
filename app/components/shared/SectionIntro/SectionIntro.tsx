import type { ReactNode } from "react";

export function SectionIntro({
  eyebrow,
  title,
  description,
  heading: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  heading?: "h1" | "h2";
}) {
  return (
    <>
      <p className="eyebrow mb-4 uppercase-label">{eyebrow}</p>
      <Heading className="font-jakarta">{title}</Heading>
      <p className="lede font-inter text-lg/7 font-normal tracking-normal">
        {description}
      </p>
    </>
  );
}
