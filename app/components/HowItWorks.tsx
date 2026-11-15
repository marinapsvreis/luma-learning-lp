const steps = [
  { name: "Choose your focus", description: "Find courses based on the skill you want to build, not endless content categories." },
  { name: "Learn from experience", description: "Follow concise lessons created by professionals who use these skills." },
  { name: "Put it into practice", description: "Every course includes practical exercises designed to turn knowledge into action." },
];

export function HowItWorks() {
  return (
    <section className="section section-spacing cream" id="how-it-works">
      <div className="container">
        <div className="center">
          <p className="eyebrow uppercase-label">How Luma works</p>
          <h2 className="font-jakarta font-extrabold tracking-[-1.2px] desktop:text-section-title">Less browsing. More learning.</h2>
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
  );
}
