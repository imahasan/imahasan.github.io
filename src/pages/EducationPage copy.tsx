import type { FC } from "react";

/** Education page — semantic HTML only, styled with .card-like blocks */
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
              <header className="mb-2">
                <h2 className="h5 mb-1">Master of Science in Informatics</h2>
                <p className="mb-0">
                  Norwegian University of Science and Technology (NTNU) · Trondheim, Norway
                  <span className="text-muted"> · Aug 2022 — Jan 2025</span>
                </p>
              </header>
              <ul className="mb-0">
                <li>Thesis: <em>“An Empirical Study on Applying Parameter-Efficient Fine-Tuning of Large Language Models for Secure Code Generation”</em> (graded A, accepted at FTC 2025).</li>
                <li>Coursework: Software Security & Data Privacy, Advanced Software Design, Information Retrieval, Applied Data Science, Data Warehousing & Mining, Advanced DBMS, Web Development.</li>
                <li>Activities: 2nd place in NTNU cybersecurity hackathon; Teaching Assistant for Advanced Software Design (TDT4250).</li>
              </ul>
            </article>

            {/* MBA (Bangladesh) */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">Master of Business Administration (MBA) — Management Information Systems</h2>
                <p className="mb-0">
                  University of Dhaka · Dhaka, Bangladesh
                </p>
              </header>
              <ul className="mb-0">
                <li>Focused on bridging IT systems and business strategy in the financial sector.</li>
                <li>Enhanced understanding of compliance, governance, and enterprise processes.</li>
              </ul>
            </article>

            {/* BSc CSE */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">Bachelor of Science in Computer Science & Engineering</h2>
                <p className="mb-0">
                  Shahjalal University of Science and Technology · Sylhet, Bangladesh
                  {/* <span className="text-muted"> · 2005 — 2009</span> */}
                </p>
              </header>
              <ul className="mb-0">
                <li>Solid foundation in programming, algorithms, databases, and system design.</li>
                <li>Thesis: “Pattern recognition using Neural Networks”.</li>
              </ul>
            </article>

            {/* Certifications */}
            <article className="card-like">
              <header className="mb-2">
                <h2 className="h5 mb-1">Certifications</h2>
              </header>
              <ul className="mb-0">
                <li><strong>CISA</strong> — Certified Information Systems Auditor</li>
                <li><strong>IELTS</strong> — Overall band 7.0</li>
                <li>Norwegian language training up to B1 (working toward B2)</li>
              </ul>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default EducationPage;
