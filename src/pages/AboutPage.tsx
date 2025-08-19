import type { FC } from "react";

const AboutPage: FC = () => {
  return (
    <main aria-labelledby="about-title">
      {/* Header card */}
      <section className="container py-4">
        <section className="row">
          <article className="user-card w-100">
            <section className="row g-3 align-items-center">
              <figure className="col-md-3 m-0">
                <img
                  src="/images/self.jpg"
                  alt="Portrait of Md Anwarul Hasan"
                  className="img-fluid rounded shadow-sm w-50"
                />
                {/* <figcaption className="text-muted small mt-2">
                  Md Anwarul Hasan
                </figcaption> */}
              </figure>

              <header className="col-md-9">
                <h1 id="about-title" className="mb-2">Md Anwarul Hasan</h1>
                <p className="mb-1">
                  <i aria-hidden="true" className="fa fa-map-marker" />&nbsp;Trondheim, Norway
                </p>
                <p className="mb-0">
                    <i aria-hidden="true" className="fa fa-envelope-o" />&nbsp;
                    E-mail: anwar (dot) cse (dot) mis (at) gmail (dot) com
                </p>
                <hr />
              </header>
            </section>

            {/* Intro letter-style section */}
            <section className="row">
              <article className="col-md-12 letter">
                <p>
                  I’m a CISA-certified IT security professional with an MSc in Informatics (NTNU),
                  focused on secure software development, GRC, and data-driven engineering. I enjoy
                  building reliable, security-aware digital services that support sustainable,
                  human-centric outcomes.
                </p>
                <p>
                  My master’s thesis <em>“An Empirical Study on Applying Parameter-Efficient
                  Fine-Tuning of Large Language Models for Secure Code Generation”</em> received an A
                  and was accepted for presentation/publication at FTC 2025 (Springer LNNS). It
                  strengthened my skills in Python, ML, and secure development practices, and built on
                  prior success in an NTNU software security hackathon (2nd place).
                </p>
                <p>
                  Professionally, I’ve worked across financial systems and consulting—implementing and
                  supporting Core Banking (FCUBS), Card Management (CMS), national payment gateways,
                  and SIEM/HSM integrations; conducting IT audits; and aligning programs to ISO&nbsp;27001,
                  PCI&nbsp;DSS, COBIT, and NIS&nbsp;2 requirements.
                </p>
              </article>
            </section>
          </article>
        </section>
      </section>

      {/* Skills & interests card */}
      <section className="container pb-4">
        <section className="row">
          <article className="col-md-12 letter">
            <p className="mb-3">
              🧰&nbsp;<strong>Toolkit:</strong> React/TypeScript, Python, SQL, Power BI, GitHub, CI/CD; Oracle/MySQL/MongoDB.
              <br />
              🔐&nbsp;<strong>Security & GRC:</strong> ISO&nbsp;27001, PCI&nbsp;DSS, COBIT, NIS&nbsp;2, audit & controls, risk assessment.
              <br />
              🧪&nbsp;<strong>Data/ML:</strong> Pandas, NumPy, scikit-learn, Matplotlib/Seaborn; analytics & visualization.
            </p>

            <p className="mb-3">
              🎓&nbsp;<strong>Education & Certs:</strong> MSc Informatics (NTNU, overall B; thesis A); CISA; IELTS 7.0; Norwegian B1 (goal B2).
            </p>

            <p className="mb-0">
              Outside of work I enjoy photography, travel, and learning languages; I’m motivated by
              cross-disciplinary projects that combine engineering, security, and data to improve
              society.
            </p>
          </article>
        </section>
      </section>

      {/* Longer background card */}
      <section className="container pb-5">
        <section className="row">
          <article className="col-md-12 letter">
            <p>
              I’m passionate about applying secure-by-design principles and data governance to real-world
              systems—bridging policy, risk, and technical implementation. My background spans software
              security, policy development, audits, and post-deployment support across mission-critical
              environments in finance and consulting.
            </p>
            <p>
              In my studies, I completed advanced coursework in Software Security &amp; Data Privacy,
              Advanced Software Design, Information Retrieval, Applied Data Science, Data Warehousing
              &amp; Data Mining, Advanced DBMS, and Web Development; I built multiple full-stack projects
              with React/TypeScript/Node and used Python tooling for analytics.
            </p>
            <p>
              Looking ahead, I’m eager to contribute to interdisciplinary teams building secure, resilient,
              and sustainable digital solutions—whether through secure system design, analytics,
              development, or GRC advisory.
            </p>
          </article>
        </section>
      </section>

      {/* Quick links */}
      <nav className="container pb-5" aria-label="External links">
        <section className="row">
          <article className="col-md-12">
            <p className="mb-2"><strong>Links</strong></p>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:anwar.cse.mis@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mahasan22/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://imahasan.github.io/" target="_blank" rel="noreferrer">
                  Home
                </a>
              </li>
            </ul>
          </article>
        </section>
      </nav>
    </main>
  );
};

export default AboutPage;
