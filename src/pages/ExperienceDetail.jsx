import { useNavigate, useParams } from "react-router-dom";
import { getExperience } from "../data/siteData";
import useSEO from "../hooks/useSEO";
import SafeImage from "../components/SafeImage";
import SkillCard from "../components/SkillCard";
import Gallery from "../components/Gallery";
import NotFoundState from "../components/NotFoundState";
import Container from "../components/Container";

export default function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <article className="min-h-screen bg-surface pb-10 pt-20 sm:pt-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Close Button */}
          <div className="mb-3 flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/experience")}
              aria-label="Close and return to experience page"
              title="Back to Experience"
              className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E8ECE8] bg-white text-ink-secondary shadow-sm transition-all duration-200 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              <svg
                className="h-5 w-5 transition-transform duration-200 group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Main Container */}
          <div className="overflow-hidden rounded-2xl border border-[#E8ECE8] bg-white shadow-sm">
            {/* Experience Header */}
            <header className="border-b border-[#E8ECE8] p-5 sm:p-8">
              {exp.category && (
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {exp.category}
                  </span>
                </div>
              )}

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div className="min-w-0">
                  <h1 className="break-words font-serif text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
                    {exp.organization}
                  </h1>

                  {exp.role && (
                    <p className="mt-2 font-serif text-lg font-medium italic text-brand sm:text-xl">
                      {exp.role}
                    </p>
                  )}
                </div>

                <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-2 text-xs text-ink-muted sm:justify-end sm:text-sm">
                  <span className="font-semibold text-ink">
                    {exp.period}
                    {exp.location && `, ${exp.location}`}
                  </span>
                </div>
              </div>
            </header>

            {/* Main Content: Two Columns */}
            <div className="grid grid-cols-1 items-start gap-6 p-5 sm:gap-8 sm:p-8 lg:grid-cols-12">
              {/* Left Column */}
              <div className="min-w-0 space-y-6 lg:col-span-7">
                {/* Cover Image */}
                {exp.image && (
                  <div className="overflow-hidden rounded-xl">
                    <SafeImage
                      src={exp.image}
                      alt={`${exp.organization} — ${exp.role || "Experience"}`}
                      ratio="ratio-4-3"
                      eager
                      className="w-full"
                    />
                  </div>
                )}

                {/* About the Experience */}
                {exp.description && (
                  <section>
                    <h2 className="mb-3 font-serif text-xl font-bold text-ink sm:text-2xl">
                      About the Experience
                    </h2>

                    <p className="text-sm leading-7 text-ink-secondary sm:text-base">
                      {exp.description}
                    </p>
                  </section>
                )}
              </div>

              {/* Right Column */}
              <div className="min-w-0 space-y-6 lg:col-span-5">
                {/* Responsibilities */}
                {exp.responsibilities?.length > 0 && (
                  <section>
                    <h2 className="mb-4 font-serif text-xl font-bold text-ink">
                      Key Responsibilities
                    </h2>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm leading-6 text-ink-secondary"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Achievements */}
                {exp.achievements?.length > 0 && (
                  <section className="border-t border-[#E8ECE8] pt-6">
                    <h2 className="mb-4 font-serif text-xl font-bold text-ink">
                      Key Achievements
                    </h2>

                    <ul className="space-y-3">
                      {exp.achievements.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm leading-6 text-ink-secondary"
                        >
                          <svg
                            className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Skills */}
                {exp.skills?.length > 0 && (
                  <section className="border-t border-[#E8ECE8] pt-6">
                    <h2 className="mb-4 font-serif text-xl font-bold text-ink">
                      Skills &amp; Competencies
                    </h2>

                    <ul className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <SkillCard
                          key={skill}
                          skill={skill}
                          small
                        />
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>

            {/* Project Gallery: At the Bottom on Mobile and Desktop */}
            {exp.gallery?.length > 0 && (
              <section className="border-t border-[#E8ECE8] p-5 sm:p-8">
                <h2 className="mb-4 font-serif text-xl font-bold text-ink sm:text-2xl">
                  Project Gallery
                </h2>

                <Gallery
                  images={exp.gallery}
                  altPrefix={`${exp.organization} visual`}
                  className="grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-6"
                />
              </section>
            )}
          </div>

          {/* Back to All Experience Button */}
          <div className="mt-5">
            <button
              type="button"
              onClick={() => navigate("/experience")}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#588157] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3F6240] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#588157] focus-visible:ring-offset-2"
            >
              <span
                aria-hidden="true"
                className="text-lg leading-none"
              >
                ←
              </span>
              Back to All Experience
            </button>
          </div>
        </div>
      </Container>
    </article>
  );
}