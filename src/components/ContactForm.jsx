
import { useState } from "react";
import Button from "./Button";

const initial = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please add a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
};

const inputBase =
  "w-full rounded-xl border bg-surface-alt px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 transition-all duration-200 hover:border-brand/50 focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-ink";

function FieldError({ id, message }) {
  if (!message) return null;

  return (
    <p
      id={id}
      className="mt-2 flex items-start gap-2 text-xs font-medium leading-5 text-red-600"
      role="alert"
    >
      <span aria-hidden="true">!</span>
      <span>{message}</span>
    </p>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const sending = status === "sending";

  const onChange = (event) => {
    const { name, value } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }

    if (status === "error") {
      setStatus("idle");
      setServerMessage("");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Honeypot: silently stop automated submissions.
    if (values.website.trim()) {
      setStatus("success");
      setValues(initial);
      return;
    }

    const found = validate(values);
    setErrors(found);
    setServerMessage("");

    if (Object.keys(found).length > 0) {
      const firstInvalidField = Object.keys(found)[0];
      document.getElementById(`contact-${firstInvalidField}`)?.focus();
      return;
    }

    setStatus("sending");

    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
        website: values.website,
      };

      
const response = await fetch(
  "https://formsubmit.co/ajax/sindhusharma398@gmail.com",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _subject: `New Portfolio Message: ${payload.subject}`,
      _template: "table",
      _honey: payload.website,
    }),
  }
);

const data = await response.json();

if (!response.ok || data.success !== "true") {
  throw new Error(
    data.message || "Unable to send your message. Please try again."
  );
}



      if (!response.ok) {
        let message = "Unable to send your message. Please try again.";

        try {
          const data = await response.json();

          if (typeof data?.message === "string") {
            message = data.message;
          }
        } catch {
          // Keep the default message if the response isn't JSON.
        }

        throw new Error(message);
      }

      setStatus("success");
      setValues(initial);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form className="w-full" onSubmit={onSubmit} noValidate>
      <div className="space-y-5 sm:space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
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
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={
              errors.name ? "contact-name-error" : undefined
            }
            className={`${inputBase} ${
              errors.name
                ? "border-red-500 bg-red-50/30"
                : "border-line"
            }`}
          />

          <FieldError
            id="contact-name-error"
            message={errors.name}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Your Email <span className="text-brand">*</span>
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
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "contact-email-error" : undefined
            }
            className={`${inputBase} ${
              errors.email
                ? "border-red-500 bg-red-50/30"
                : "border-line"
            }`}
          />

          <FieldError
            id="contact-email-error"
            message={errors.email}
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className={labelClass}>
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
            placeholder="Collaboration or inquiry"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={
              errors.subject ? "contact-subject-error" : undefined
            }
            className={`${inputBase} ${
              errors.subject
                ? "border-red-500 bg-red-50/30"
                : "border-line"
            }`}
          />

          <FieldError
            id="contact-subject-error"
            message={errors.subject}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Your Message <span className="text-brand">*</span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={onChange}
            required
            disabled={sending}
            placeholder="Tell me a little about your inquiry..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${inputBase} min-h-36 resize-y leading-7 ${
              errors.message
                ? "border-red-500 bg-red-50/30"
                : "border-line"
            }`}
          />

          <FieldError
            id="contact-message-error"
            message={errors.message}
          />
        </div>

        {/* Honeypot field for spam protection */}
        <div
          className="hidden"
          aria-hidden="true"
        >
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

        {/* Success and Error Messages */}
        <div aria-live="polite" aria-atomic="true">
          {status === "success" && (
            <div className="flex items-start gap-3 rounded-xl border border-brand/25 bg-brand-light p-4 text-sm leading-6 text-brand-dark">
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

              <p>
                Thank you! Your message has been sent successfully.
                I'll get back to you soon.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p>
                {serverMessage ||
                  "Something went wrong. Please try again."}
              </p>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className="group w-full justify-center rounded-xl py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-auto sm:min-w-44"
          >
            {sending ? (
              <>
                <svg
                  className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <span className="inline-flex items-center gap-2">
                Send Message
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
