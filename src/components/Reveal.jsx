import useReveal from "../hooks/useReveal";

/**
 * Editorial subtle reveal container using standard Tailwind transitions.
 * Respects reduced-motion preferences via media queries or default gentle fade.
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 rounded-xl ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
