import { useState } from "react";
import Button from "./Button";

const initial = { name: "", email: "", subject: "", message: "", website: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(v.email)) e.email = "Please enter a valid email address.";
  if (!v.subject.trim()) e.subject = "Please add a subject.";
  if (!v.message.trim()) e.message = "Please write a message.";
  else if (v.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
  return e;
};

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <form
      className="bg-white border border-line rounded-sm p-6 sm:p-8 lg:p-10 shadow-xs"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold tracking-wider uppercase text-ink mb-2"
          >
            Your Name <span className="text-brand">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            required
            autoComplete="name"
            disabled={sending}
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`w-full px-4 py-3 text-sm rounded-sm bg-surface-alt border text-ink placeholder:text-ink-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors duration-200 ${
              errors.name ? "border-red-500 bg-red-50/20" : "border-line"
            }`}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold tracking-wider uppercase text-ink mb-2"
          >
            Email Address <span className="text-brand">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            required
            autoComplete="email"
            disabled={sending}
            placeholder="jane@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`w-full px-4 py-3 text-sm rounded-sm bg-surface-alt border text-ink placeholder:text-ink-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors duration-200 ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-line"
            }`}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-semibold tracking-wider uppercase text-ink mb-2"
          >
            Subject <span className="text-brand">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={onChange}
            required
            disabled={sending}
            placeholder="Collaboration or Inquiry"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            className={`w-full px-4 py-3 text-sm rounded-sm bg-surface-alt border text-ink placeholder:text-ink-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors duration-200 ${
              errors.subject ? "border-red-500 bg-red-50/20" : "border-line"
            }`}
          />
          {errors.subject && (
            <p id="contact-subject-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold tracking-wider uppercase text-ink mb-2"
          >
            Message <span className="text-brand">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={onChange}
            required
            disabled={sending}
            placeholder="Write your message here..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`w-full px-4 py-3 text-sm rounded-sm bg-surface-alt border text-ink placeholder:text-ink-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors duration-200 resize-y ${
              errors.message ? "border-red-500 bg-red-50/20" : "border-line"
            }`}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Honeypot field (hidden from screen and tab order) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={onChange}
          />
        </div>

        {/* Status Alerts */}
        <div aria-live="polite">
          {status === "success" && (
            <div className="p-4 rounded-sm bg-brand-light border border-brand/30 text-brand-dark text-sm flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 text-brand mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
            </div>
          )}
          {status === "error" && (
            <div className="p-4 rounded-sm bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Something went wrong. Please check your connection or reach out directly via email.</span>
            </div>
          )}
        </div>

        <div>
          <Button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className="w-full sm:w-auto"
          >
            {sending ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
