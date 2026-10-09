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
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variantClasses = {
    solid:
      "bg-brand text-white border border-transparent hover:bg-brand-dark shadow-sm active:translate-y-[1px]",
    outline:
      "bg-transparent text-ink border border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 active:translate-y-[1px]",
    white:
      "bg-white text-ink-primary border border-line hover:bg-surface-alt hover:border-neutral-300 active:translate-y-[1px]",
    ghost:
      "bg-transparent text-brand hover:text-brand-dark hover:bg-brand-light/50 border border-transparent",
  };

  const combined = `${baseClasses} ${variantClasses[variant] || variantClasses.solid} ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={combined} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={combined} {...rest}>
      {children}
    </button>
  );
}
