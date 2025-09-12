import { ReactNode } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-5">
      <Container>
        <h2 className="mb-4">{title}</h2>
        {children}
      </Container>
    </section>
  );
}

export default function App() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="py-5 bg-light border-bottom">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={7}>
              <h1 className="display-5 fw-bold">👋 Hi!, I’m Hasan.</h1>
              <p className="lead mb-2">
                Informatics (NTNU, MSc) — I’m <strong>CISA-certified</strong>. My expertise lies in the
                intersection of <em>cybersecurity (GRC)</em>, <em>secure software development</em>, <em>AI</em>, and <em>machine learning</em>.
              </p>

              {/* CTAs */}
              <nav className="d-flex gap-2" aria-label="Hero actions">
                <Button href="#vision">My Vision</Button>
                <Button variant="outline-secondary" href="#contact">Get in Touch</Button>
              </nav>
            </Col>

            <Col md={5}>
              <Card>
                <Card.Body>
                  <Card.Title className="mb-2">Latest</Card.Title>
                  <Card.Text className="mb-1">
                    Thesis (A): <em>PEFT for Secure Code Generation</em>.
                  </Card.Text>
                  <Card.Text>
                    Accepted for presentation at FTC 2025 and publication in Springer LNNS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🌟 My Vision Section */}
      <Section id="vision" title="🎯 My Vision">
        <div className="highlight-section">
          <p className="blurb">
            I believe that the future of technology depends on building systems that are <strong>secure by design</strong>.
            My vision is to <strong>make software development secure with the use of AI and machine learning</strong> —
            integrating intelligent models that detect vulnerabilities early, automate compliance, and
            guide developers toward safe coding practices.
          </p>
          <h3>🔑 Key Areas I Care About</h3>
          <ul>
            <li>Using AI-assisted tools to prevent security flaws before deployment</li>
            <li>Embedding secure-by-default principles into the SDLC</li>
            <li>Balancing usability, privacy, and robust defense mechanisms</li>
            <li>Promoting awareness of secure development practices in teams</li>
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p>
          Email: <a href="mailto:anwar.cse.mis@gmail.com">Click Here</a> ·{' '}
          LinkedIn: <a href="https://www.linkedin.com/in/mahasan22/" target="_blank" rel="noreferrer">My LinkedIn</a>
        </p>
      </Section>

      <footer className="py-4 border-top">
        <Container className="text-muted">
          © {new Date().getFullYear()} Md Anwarul Hasan · Built with React-Bootstrap
        </Container>
      </footer>
    </>
  );
}
