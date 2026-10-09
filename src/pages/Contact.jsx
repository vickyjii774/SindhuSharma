
import { getActiveSocial } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  useSEO({
    page: "Contact",
    description:
      "Get in touch with Sindhu Sharma for questions, collaborations, speaking opportunities, or inquiries.",
  });

  const hasSocial = getActiveSocial().length > 0;

  return (
    <div className="pb-20 pt-24 sm:pb-28 sm:pt-28 lg:pt-32">
      {/* Page Heading */}
      <section className="mb-10 border-b border-line bg-surface py-10 sm:mb-12 sm:py-14">
        <Container>
          <SectionHeading
            title="Let's Connect"
            text="Whether you want to collaborate, chat, or just say hello — fill out the form and I'll get back to you."
            className="mb-0"
          />
        </Container>
      </section>

      {/* Main Contact Content */}
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Contact Form Card */}
          <section className="rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-xl sm:p-8 lg:p-10">
            {/* Form Introduction */}
            <div className="mb-8 text-center">

              <h2 className="font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Send Me a Message
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink-secondary sm:text-base">
                Have an idea, question, or opportunity? I'd love to hear from
                you.
              </p>

              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-brand transition-all duration-300 hover:w-20" />
            </div>

            {/* Form Fields and Submit Button */}
            <ContactForm />

            {/* Social Links */}
            {hasSocial && (
              <div className="mt-8 border-t border-line pt-7">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-x-0 top-1/2 border-t border-line" />

                  <span className="relative bg-white px-4 text-sm text-ink-muted">
                    or find me on
                  </span>
                </div>

                <div className="mt-6 flex justify-center ">
                  <SocialLinks className="flex-wrap justify-center gap-4" />
                </div>
              </div>
            )}
          </section>

          {/* Collaborations & Speaking — Below the Form */}
          <section className="group relative mt-6 overflow-hidden rounded-2xl border border-brand/20 bg-brand-light/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg sm:p-8">
            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 transition-transform duration-500 group-hover:scale-125" />

            <div className="relative flex items-start gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 8v4l3 2"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="9" strokeWidth="1.7" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-dark">
                  Let's Work Together
                </p>

                <h2 className="font-serif text-xl font-bold text-brand-dark sm:text-2xl">
                  Collaborations &amp; Speaking
                </h2>

                <p className="mt-3 text-sm leading-7 text-ink-secondary sm:text-base">
                  I'm always open to collaborations, speaking engagements, and
                  opportunities to share knowledge. If you have an idea or
                  project in mind, feel free to reach out!
                </p>
            
               

                <div className="mt-5 h-1 w-10 rounded-full bg-brand/50 transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
