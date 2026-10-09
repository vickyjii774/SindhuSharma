import Button from "./Button";
import Container from "./Container";

export default function NotFoundState({
  title = "Page Not Found",
  text = "The page you are looking for doesn't exist.",
  backTo = "/",
  backLabel = "Back Home",
}) {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center min-h-[50vh]">
      <Container className="text-center flex flex-col items-center">
        <span className="font-serif text-6xl sm:text-8xl font-bold text-brand leading-none mb-4">
          404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary max-w-md mb-8 leading-relaxed">
          {text}
        </p>
        <Button to={backTo}>
          {backLabel}
        </Button>
      </Container>
    </div>
  );
}
