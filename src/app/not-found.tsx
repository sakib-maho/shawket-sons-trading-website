import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-xl text-center">
        <span className="eyebrow mx-auto">404</span>
        <h1 className="heading-lg mt-5">Page not found</h1>
        <p className="lead mt-4">
          The page you are looking for does not exist. It may have been moved, renamed, or is not
          yet published.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
