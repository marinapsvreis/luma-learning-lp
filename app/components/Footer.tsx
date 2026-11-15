import Image from "next/image";

const footerGroups = [
  { name: "Explore", links: [["Courses", "#courses"], ["Categories", "#categories"], ["Instructors", "#community"], ["For Teams", "#contact"]] },
  { name: "Company", links: [["About", "#how-it-works"], ["Careers", "#contact"], ["Journal", "#community"]] },
  { name: "Support", links: [["Help Center", "#contact"], ["Contact", "#contact"], ["Terms", "#contact"], ["Privacy", "#contact"]] },
];

export function Footer() {
  return (
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
  );
}
