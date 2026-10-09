import { useParams, Link } from "react-router-dom";
import { getExperience } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import SafeImage from "../components/SafeImage";
import SkillCard from "../components/SkillCard";
import Gallery from "../components/Gallery";
import Button from "../components/Button";
import NotFoundState from "../components/NotFoundState";
import Container from "../components/Container";

export default function ExperienceDetail() {
  const { id } = useParams();
  const exp = getExperience(id);

  useSEO({
    page: exp ? exp.organization : "Experience Not Found",
    description: exp?.description,
    image: exp?.image,
  });

  if (!exp) {
    return (
      <div className="pt-24 sm:pt-32">
        <NotFoundState
          title="Experience Not Found"
          text="The requested experience case study could not be located."
          backTo="/experience"
          backLabel="Back to All Experience"
        />
      </div>
    );
  }

  return (
    <article className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
      {/* Header Case Study Title */}
      <section className="py-12 sm:py-16 bg-surface border-b border-line">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Link
                to="/experience"
                className="text-xs font-semibold tracking-wider uppercase text-brand hover:text-brand-dark cursor-pointer transition-colors"
              >
                ← Experience
              </Link>
              {exp.category && (
                <>
                  <span className="text-line">•</span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-ink-muted">
                    {exp.category}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
              {exp.organization}
            </h1>

            <p className="mt-3 font-serif text-xl sm:text-2xl text-brand font-medium italic">
              {exp.role}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-ink-secondary pt-4 border-t border-line/60">
              <div>
                <span className="text-ink-muted block text-xs uppercase tracking-wider">Duration</span>
                <span className="text-ink font-semibold">{exp.period}</span>
              </div>
              {exp.location && (
                <div>
                  <span className="text-ink-muted block text-xs uppercase tracking-wider">Location</span>
                  <span className="text-ink font-semibold">{exp.location}</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="mt-12 sm:mt-16">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          {/* Large Cover Image if available */}
          {exp.image && (
            <div className="rounded-sm overflow-hidden border border-line shadow-sm">
              <SafeImage
                src={exp.image}
                alt={`${exp.organization} — ${exp.role}`}
                ratio="ratio-16-9"
                eager
                className="w-full"
              />
            </div>
          )}

          {/* About Section */}
          <section className="bg-white border border-line rounded-sm p-6 sm:p-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              About the Experience
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              {exp.description}
            </p>
          </section>

          {/* Responsibilities */}
          {exp.responsibilities?.length > 0 && (
            <section className="bg-white border border-line rounded-sm p-6 sm:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-6">
                Key Responsibilities
              </h2>
              <ul className="space-y-3.5">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-ink-secondary leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Achievements */}
          {exp.achievements?.length > 0 && (
            <section className="bg-white border border-line rounded-sm p-6 sm:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-6">
                Key Achievements
              </h2>
              <ul className="space-y-3.5">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-ink-secondary leading-relaxed">
                    <svg className="w-5 h-5 text-brand shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Applied Skills */}
          {exp.skills?.length > 0 && (
            <section className="bg-white border border-line rounded-sm p-6 sm:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
                Technologies & Tools Applied
              </h2>
              <ul className="flex flex-wrap gap-2.5">
                {exp.skills.map((s) => (
                  <SkillCard key={s} skill={s} small />
                ))}
              </ul>
            </section>
          )}

          {/* Gallery */}
          {exp.gallery?.length > 0 && (
            <section className="space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Project Gallery
              </h2>
              <Gallery images={exp.gallery} altPrefix={`${exp.organization} visual`} />
            </section>
          )}

          {/* Navigation Back */}
          <div className="pt-8 border-t border-line flex items-center justify-between">
            <Button to="/experience" variant="outline">
              ← Back to All Experience
            </Button>
            <Button to="/contact">
              Discuss Collaboration
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
