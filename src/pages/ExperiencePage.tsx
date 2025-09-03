import type { FC } from "react";

/** Experience page — semantic HTML only, styled with .card-like blocks */
const ExperiencePage: FC = () => {
  return (
    <main aria-labelledby="experience-title">
      <section className="container py-4">
        <section className="row justify-content-center">
          <section className="col-lg-8">
            <header className="mb-3">
              <h1 id="experience-title" className="mb-0">Experience</h1>
              <p className="text-muted">Selected professional roles & responsibilities</p>
            </header>


            {/* ─── NTNU TA ────────────────────────────────────────── */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">Teaching Assistant (Advanced Software Design)</h2>
                <p className="mb-0">
                  NTNU · Trondheim, Norway · Part-time
                  <span className="text-muted"> · Aug 2023 — Dec 2023</span>
                </p>
              </header>
              <ul className="mb-0">
                <li>Supported lab sessions, coached students on programming tasks and software architecture.</li>
                <li>Evaluated assignments and provided constructive feedback.</li>
              </ul>
            </article>


            {/* ─── NRB Bank ───────────────────────────────────────── */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">Principal Officer — IT Audit & Investigation</h2>
                <p className="mb-0">
                  NRB Bank Limited · Dhaka, Bangladesh · Full-time
                  <span className="text-muted"> · Apr 2019 — Aug 2022</span>
                </p>
              </header>
              <ul className="mb-0">
                <li>Led audits covering cybersecurity, IT operations, and compliance; developed audit strategy and risk-based plans.</li>
                <li>Evaluated adequacy of IT operating procedures; prepared audit reports and work papers.</li>
                <li>Advised on IT security, governance, and compliance across projects and change initiatives.</li>
              </ul>
            </article>

            {/* ─── Prime Bank ─────────────────────────────────────── */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">Senior Officer — IT (Internal Control & Compliance)</h2>
                <p className="mb-0">
                  Prime Bank Limited · Dhaka, Bangladesh · Full-time
                  <span className="text-muted"> · Sep 2015 — Apr 2019</span>
                </p>
              </header>
              <ul className="mb-0">
                <li>Drafted and revised policies & procedures for information security, BCP/DR, and QA.</li>
                <li>Identified compliance risks and recommended corrective actions aligned with best practices.</li>
                <li>Monitored critical financial transactions and maintained status of compliance activities.</li>
              </ul>
            </article>

            {/* ─── data edge limited ──────────────────────────────── */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">Senior Application Support Specialist</h2>
                <p className="mb-0">
                  data edge limited · Dhaka, Bangladesh · Full-time
                  <span className="text-muted"> · Sep 2009 — Aug 2015</span>
                </p>
              </header>
              <ul className="mb-0">
                <li>Implemented & supported Core Banking (FCUBS) and Card Management (CMS) systems.</li>
                <li>Built customized/complex reports on OBIEE; supported HSM installation & configuration.</li>
                <li>Delivered user training, parameter setup guidance, and post-deployment support.</li>
              </ul>
            </article>


          </section>
        </section>
      </section>
    </main>
  );
};

export default ExperiencePage;
