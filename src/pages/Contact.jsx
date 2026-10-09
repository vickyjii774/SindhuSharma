import { siteData, getActiveSocial } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function Contact() {
  useSEO({
    page: "Contact",
    description: "Get in touch with Sindhu Sharma for questions, collaborations, speaking opportunities, or inquiries.",
  });

  const { email, phone, location } = siteData.personal;
  const hasSocial = getActiveSocial().length > 0;

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-surface border-b border-line mb-12 sm:mb-16">
        <Container>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's Connect"
            text="Have a question, speaking invitation, collaboration opportunity, or simply want to say hello?"
            className="mb-0"
          />
        </Container>
      </section>

      {/* Main 2-Column Grid on Desktop, Single Column on Mobile */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social */}
          <aside className="lg:col-span-5 space-y-8" aria-label="Direct contact details">
            <div className="bg-white border border-line rounded-sm p-6 sm:p-8 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-ink">
                Contact Information
              </h2>

              <dl className="space-y-5 text-sm">
                {email ? (
                  <div>
                    <dt className="text-xs font-semibold tracking-wider uppercase text-brand mb-1">
                      Email
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${email}`}
                        className="text-base font-medium text-ink hover:text-brand transition-colors cursor-pointer"
                      >
                        {email}
                      </a>
                    </dd>
                  </div>
                ) : null}

                {phone ? (
                  <div>
                    <dt className="text-xs font-semibold tracking-wider uppercase text-brand mb-1">
                      Phone
                    </dt>
                    <dd>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-base font-medium text-ink hover:text-brand transition-colors cursor-pointer"
                      >
                        {phone}
                      </a>
                    </dd>
                  </div>
                ) : null}

                {location ? (
                  <div>
                    <dt className="text-xs font-semibold tracking-wider uppercase text-brand mb-1">
                      Location
                    </dt>
                    <dd className="text-base font-medium text-ink">
                      {location}
                    </dd>
                  </div>
                ) : null}
              </dl>

              {hasSocial && (
                <div className="pt-6 border-t border-line">
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-brand mb-3">
                    Connect Online
                  </h3>
                  <SocialLinks />
                </div>
              )}
            </div>

            <div className="p-6 rounded-sm bg-brand-light/50 border border-brand/20">
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-1">
                Collaborations & Speaking
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Sindhu is regularly open to discussions regarding architectural consulting, youth advocacy projects, panel discussions, and community initiatives.
              </p>
            </div>
          </aside>
          

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
