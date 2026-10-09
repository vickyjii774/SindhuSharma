
import { Link } from "react-router-dom";

export default function Button({
  to,
  variant = "solid",
  children,
  className = "",
  disabled = false,
  type = "button",
  ...rest
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md cursor-pointer transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const variantClasses = {
    solid:
      "bg-brand text-white border border-transparent shadow-sm hover:-translate-y-1 hover:bg-brand-dark hover:shadow-lg hover:shadow-[#588157]/30 active:translate-y-0",

    outline:
      "bg-transparent text-ink border border-neutral-300 hover:-translate-y-1 hover:bg-brand hover:text-white hover:border-brand hover:shadow-lg hover:shadow-[#588157]/20 active:translate-y-0",

    white:
      "bg-white text-ink-primary border border-line hover:-translate-y-1 hover:bg-surface-alt hover:border-neutral-300 hover:shadow-md active:translate-y-0",

    ghost:
      "bg-transparent text-brand border border-transparent hover:bg-brand-light/50 hover:text-brand-dark hover:-translate-y-0.5 active:translate-y-0",
  };

  const combined = `${baseClasses} ${
    variantClasses[variant] || variantClasses.solid
  } ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={combined} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combined}
      {...rest}
    >
      {children}
    </button>
  );
}
