import type { FC } from "react";

const PublicationsPage: FC = () => {
  return (
    <main aria-labelledby="publications-title">
      <section className="container py-4">
        <section className="row justify-content-center">
          <section className="col-lg-8">
            <header className="mb-3">
              <h1 id="publications-title" className="mb-0">Publications</h1>
              <p className="text-muted">Selected research and academic outputs</p>
            </header>

            {/* FTC 2025 */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">
                  Applying Parameter-Efficient Fine-Tuning to Secure Code Generation
                </h2>
                <p className="mb-0">
                  <span className="fw-semibold">
                    Future Technologies Conference (FTC) 2025
                  </span>{" "}
                  · Springer Lecture Notes in Networks and Systems (LNNS)
                  <span className="text-muted"> · Accepted</span>
                </p>
              </header>
              <p className="mb-0">
                Will present at FTC 2025 in Munich, published in Springer LNNS.{" "}
                <a
                  href="https://saiconference.com/FTC" 
                  target="_blank"
                  rel="noreferrer"
                >
                  Conference website
                </a>
              </p>
            </article>

            {/* Placeholder for more works */}
            <article className="card-like">
              <header className="mb-2">
                <h2 className="h5 mb-1">Additional Works</h2>
              </header>
              <p className="mb-0">
                More publications will be added here as they are published —
                covering secure software systems, GRC, and data-driven
                engineering.
              </p>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default PublicationsPage;
