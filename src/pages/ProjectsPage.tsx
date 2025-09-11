import type { FC } from "react";

const ProjectsPage: FC = () => {
  return (
    <main aria-labelledby="projects-title">
      <section className="container py-4">
        <section className="row justify-content-center">
          <section className="col-lg-8">
            <header className="mb-3">
              <h1 id="projects-title" className="mb-0">Projects</h1>
              <p className="text-muted">Selected repositories and study work</p>
            </header>

            {/* NTNU coursework collection */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">NTNU — Coursework & Assignments</h2>
                <p className="mb-0">University projects and exercises completed during my MSc</p>
              </header>
              <ul className="mb-3">
                <li>Advanced Software Design, Software Security & Data Privacy, IR, DS/ML, DBMS, Web Dev, etc.</li>
              </ul>
              <p className="mb-0">
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="https://github.com/imahasan/NTNU"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                </a>
              </p>
            </article>

            {/* Thesis / PEFT experiments */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">PEFT Experiments for Secure Code Generation</h2>
                <p className="mb-0">LoRA & IA3 experiments with LLMs for secure coding workflows</p>
              </header>
              <ul className="mb-3">
                <li>Parameter-efficient fine-tuning, evaluation with static analyzers, reproducible pipelines.</li>
              </ul>
              <p className="mb-0">
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="https://github.com/imahasan/PEFT_experiment_LLM_LoRA_IA3"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                </a>
              </p>
            </article>

            {/* Data Science portfolio */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">Data Science Portfolio</h2>
                <p className="mb-0">Analytics, visualization, ML notebooks and small apps</p>
              </header>
              <ul className="mb-3">
                <li>Pandas/NumPy, scikit-learn, Matplotlib/Seaborn; reproducible notebooks.</li>
              </ul>
              <p className="mb-0">
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="https://github.com/imahasan/DataSciencePortfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                </a>
              </p>
            </article>

            {/* Web practice */}
            <article className="card-like mb-4">
              <header className="mb-2">
                <h2 className="h5 mb-1">HTML & CSS Practice</h2>
                <p className="mb-0">Small websites and layout experiments</p>
              </header>
              <ul className="mb-3">
                <li>Responsive layouts, components, typography, and theming practice.</li>
              </ul>
              <p className="mb-0">
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="https://github.com/imahasan/HTML-and-CSS-practice"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                </a>
              </p>
            </article>

            {/* Interesting Problem Solving */}
            <article className="card-like">
              <header className="mb-2">
                <h2 className="h5 mb-1">Interesting Problem Solving Practice</h2>
                <p className="mb-0">Algorithmic puzzles and classic problems</p>
              </header>
              <ul className="mb-3">
                <li>Sudoku solver, Tower of Hanoi, and more to come.</li>
              </ul>
              <p className="mb-0">
                <a
                  className="btn btn-outline-primary btn-sm"
                  href="https://github.com/imahasan/Interesting-Problem-Solving-Practice"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                </a>
              </p>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default ProjectsPage;
