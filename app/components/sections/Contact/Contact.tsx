import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { SectionIntro } from "../../shared/SectionIntro/SectionIntro";
import type { Locale } from "../../../locale";
import { messages } from "./Contact.copy";

export function Contact({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <section className="section" id="contact">
      <div className="container split">
        <div className="contact-copy">
          <SectionIntro
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="contact-info body-1">
            <div>
              <span className="info-icon">
                <Image
                  src="/images/contact-email.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
              <p>
                {copy.emailLabel}{" "}
                <a href="mailto:contact@luma.com">contact@luma.com</a>
              </p>
            </div>
            <div>
              <span className="info-icon">
                <Image
                  src="/images/contact-response-time.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
              <p>
                {copy.responseTime} <span>{copy.responseWindow}</span>
              </p>
            </div>
          </div>
        </div>
        <ContactForm locale={locale} />
      </div>
    </section>
  );
}
