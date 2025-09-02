import type { FC } from "react";

const AboutPage: FC = () => {
  return (
    <main aria-labelledby="about-title">
      <section className="container py-4">
        {/* Center column */}
        <section className="row justify-content-center">
          <section className="col-lg-8">

            {/* ─── Block 1: Profile ─────────────────────────────── */}
            <article className="card-like mb-4">
              <section className="row g-3 align-items-center">
                <figure className="col-md-3 m-0 text-center">
                  <img
                    src="/images/self.jpg"
                    alt="Portrait of Md Anwarul Hasan"
                    className="img-fluid rounded shadow-sm"
                    style={{ maxWidth: 200 }}
                  />
                </figure>

                <header className="col-md-9">
                  <h1 id="about-title" className="mb-2">Md Anwarul Hasan</h1>
                  <p className="mb-1">
                    <i aria-hidden="true" className="fa fa-map-marker" />&nbsp;Trondheim, Norway
                  </p>
                  <p className="mb-0">
                    <i aria-hidden="true" className="fa fa-envelope-o" />&nbsp;
                    anwar (dot) cse (dot) mis (at) gmail (dot) com
                  </p>
                  <hr />
                  <p className="mb-0">
                    I’m a CISA-certified IT professional (MSc Informatics, NTNU) focused on secure
                    software development, GRC, and data-driven engineering.
                  </p>
                </header>
              </section>
            </article>

            {/* ─── Block 2: “I’m also …” (middle) ───────────────── */}
            <article className="card-like mb-4">
              <p className="mb-2"><strong>I’m also</strong></p>
              <p className="mb-0">
                🗺️&nbsp; a traveller<br />
                🍳&nbsp; a cook<br />
                🍽️&nbsp; an avid eater<br />
                📷&nbsp; a photographer<br />
                📚&nbsp; a reader<br />
                🎬&nbsp; a movie watcher<br />
                ⚽&nbsp; a Barça fan<br />
                🗣️&nbsp; a polyglot (Bengali, English, Hindi, Norsk)<br />
                👂&nbsp; and a good listener
              </p>
            </article>

            {/* ─── Block 3: Background / Skills (bottom) ────────── */}
            <article className="card-like">
              <p className="mb-2"><strong>I can:</strong></p>

              <p className="mb-3">
                <span className="me-2">💻</span>
                <strong>Programming:</strong> Python, Java, C, JavaScript, TypeScript, SQL.
              </p>

              <p className="mb-3">
                <span className="me-2">🧰</span>
                <strong>Toolkit:</strong> React, Node.js, Power BI, Git/GitHub, CI/CD, Docker, Oracle/MySQL/MongoDB.
              </p>

              <p className="mb-3">
                <span className="me-2">🔐</span>
                <strong>Security & GRC:</strong> ISO&nbsp;27001, PCI&nbsp;DSS, COBIT, NIS&nbsp;2; IT audits, controls, risk assessment.
              </p>

              <p className="mb-3">
                <span className="me-2">🎓</span>
                MSc Informatics (NTNU, thesis A), CISA, IELTS 7.0, Norwegian B1 (working toward B2).
              </p>

              <p className="mb-0">
                I’m motivated by projects that blend engineering, security, and data to build reliable,
                human-centric, and sustainable digital services.
              </p>
            </article>
          </section>
        </section>
      </section>

      {/* Quick links aligned with the centered column */}
      <nav className="container pb-5" aria-label="External links">
        <section className="row justify-content-center">
          <section className="col-lg-8">
            <article className="card-like">
              <p className="mb-2"><strong>Links</strong></p>
              <ul className="list-unstyled mb-0">
                <li><a href="mailto:anwar.cse.mis@gmail.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/mahasan22/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://imahasan.github.io/" target="_blank" rel="noreferrer">Home</a></li>
              </ul>
            </article>
          </section>
        </section>
      </nav>
    </main>
  );
};

export default AboutPage;
