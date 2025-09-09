import type { FC } from "react";

const EducationPage: FC = () => {
  return (
    <main aria-labelledby="education-title">
      <section className="container py-4">
        <section className="row justify-content-center">
          <section className="col-lg-8">
            <header className="mb-3">
              <h1 id="education-title" className="mb-0">Education</h1>
              <p className="text-muted">Academic background & certifications</p>
            </header>

            {/* MSc NTNU */}
            <article className="card-like mb-4">
              <section className="row g-3 align-items-center">
                <figure className="col-md-3 m-0 text-center">
                  <img
                    src="/images/education/ntnu.png"
                    alt="NTNU Logo"
                    className="img-fluid"
                    style={{ maxWidth: 120 }}
                  />
                </figure>
                <header className="col-md-9">
                  <h2 className="h5 mb-1">Master of Science in Informatics</h2>
                  <p className="mb-0">
                    Norwegian University of Science and Technology (NTNU) · Trondheim, Norway
                    <span className="text-muted"> · Aug 2022 — Jan 2025</span>
                  </p>
                </header>
              </section>
              <ul className="mb-0 mt-2">
                <li>Thesis: <em>“An Empirical Study on Applying Parameter-Efficient Fine-Tuning of Large Language Models for Secure Code Generation”</em> (A, published FTC 2025).</li>
                <li>Courses: Software Security, Advanced Software Design, Data Science, Data Mining, Web Development, etc.</li>
                <li>Activities: 2nd place in NTNU cybersecurity hackathon; Teaching Assistant for TDT4250.</li>
              </ul>
            </article>

            {/* MBA DU */}
            {/* <article className="card-like mb-4">
              <section className="row g-3 align-items-center">
                <figure className="col-md-3 m-0 text-center">
                  <img
                    src="/images/education/du.png"
                    alt="University of Dhaka Logo"
                    className="img-fluid"
                    style={{ maxWidth: 120 }}
                  />
                </figure>
                <header className="col-md-9">
                  <h2 className="h5 mb-1">MBA — Management Information Systems</h2>
                  <p className="mb-0">
                    University of Dhaka · Dhaka, Bangladesh
                    <span className="text-muted"> · 2011 — 2013</span>
                  </p>
                </header>
              </section>
              <ul className="mb-0 mt-2">
                <li>Bridged IT systems with business strategy in the financial sector.</li>
                <li>Enhanced knowledge in compliance, governance, and enterprise processes.</li>
              </ul>
            </article> */}

            {/* BSc SUST */}
            <article className="card-like mb-4">
              <section className="row g-3 align-items-center">
                <figure className="col-md-3 m-0 text-center">
                  <img
                    src="/images/education/sust.png"
                    alt="SUST Logo"
                    className="img-fluid"
                    style={{ maxWidth: 100 }}
                  />
                </figure>
                <header className="col-md-9">
                  <h2 className="h5 mb-1">Bachelor of Science in Computer Science & Engineering</h2>
                  <p className="mb-0">
                    Shahjalal University of Science and Technology · Sylhet, Bangladesh
                    {/* <span className="text-muted"> · 2005 — 2009</span> */}
                  </p>
                </header>
              </section>
              <ul className="mb-0 mt-2">
                <li>Strong foundation in programming, algorithms, databases, and system design.</li>
                <li>Thesis: “Pattern recognition using Neural Networks”.</li>
              </ul>
            </article>

            {/* Certifications */}
            <article className="card-like">
              <header className="mb-2">
                <h2 className="h5 mb-1">Certifications</h2>
              </header>
              <ul className="mb-0">
                <li>
                  <img src="/images/education/isaca.png" alt="ISACA Logo" style={{ height: "1.2em", marginRight: "0.5em" }} />
                  <strong>CISA</strong> — Certified Information Systems Auditor
                </li>
                <li>
                  <img src="/images/education/ielts.png" alt="IELTS Logo" style={{ height: "1.2em", marginRight: "0.5em" }} />
                  <strong>IELTS</strong> — Overall band 7.0
                </li>
                <li>
                  <img src="/images/education/norwegian.png" alt="Norwegian flag" style={{ height: "1.2em", marginRight: "0.5em" }} />
                  Norwegian language training up to B1 (working toward B2)
                </li>
              </ul>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default EducationPage;
