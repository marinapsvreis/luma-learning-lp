import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { SectionIntro } from "./SectionIntro";

export function Contact() {
  return (
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
  );
}
