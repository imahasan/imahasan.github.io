import { ReactNode } from 'react';
import { Container, Nav, Row, Col, Button, Card, Badge } from 'react-bootstrap';

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
    <Container fluid>
      <Row className="min-vh-100">
        {/* Left Sidebar */}
        <Col
          md={3}
          lg={2}
          as="aside"
          className="bg-light border-end py-4 sidebar"
          aria-label="Site navigation"
        >
          <header className="px-3 mb-4">
            <a className="navbar-brand fw-semibold text-decoration-none" href="#home">
              Md Anwarul Hasan
            </a>
          </header>

          <nav className="px-3">
            <Nav className="flex-column">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link> {/* new item */}
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#publications">Publications</Nav.Link>
              <Nav.Link href="#hobbies">Hobbies</Nav.Link> {/* renamed */}
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </nav>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} as="main" className="py-4">
          {/* Hero */}
          <section id="home" className="py-5 bg-light border-bottom">
            <Container>
              <Row className="align-items-center g-4">
                <Col md={7}>
                  <h1 className="display-5 fw-bold">👋 Hi!, I’m Hasan.</h1>
                  <p className="lead mb-2">
                    Informatics (NTNU, MSc) — <strong>CISA</strong>. I work at the intersection of{' '}
                    <em>cybersecurity (GRC)</em>, <em>secure software</em>, and <em>machine learning</em>.
                  </p>

                  {/* Badges group (semantic wrapper) */}
                  <section className="mb-3" aria-label="Skills">
                    <Badge bg="primary" className="me-2">ISO 27001 &amp; COBIT</Badge>
                    <Badge bg="secondary" className="me-2">React • TypeScript • Python</Badge>
                    <Badge bg="success">Power BI • SQL</Badge>
                  </section>

                  {/* CTA buttons as a nav */}
                  <nav className="d-flex gap-2" aria-label="Hero actions">
                    <Button href="#projects">See Projects</Button>
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

          {/* About */}
          <Section id="about" title="About">
            <p>
              I’m based in Trondheim, Norway. My background spans IT governance, risk and compliance (GRC),
              IT auditing, software testing, and data-driven development. I enjoy building secure, reliable systems.
            </p>
          </Section>

          {/* Experience */}
          <Section id="experience" title="Experience">
            <Row className="g-4">
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>IT Auditor &amp; GRC Advisor</Card.Title>
                    <Card.Text>
                      Led audits of critical financial systems (CBS, CMS, gateways), developed policies &amp; procedures,
                      coordinated compliance, and introduced MIS reporting for control monitoring.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Teaching Assistant — NTNU</Card.Title>
                    <Card.Text>
                      Assisted in Advanced Software Design (TDT4250), mentoring on software architecture.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Section>

          {/* Details of education */}
          <Section id="education" title="Education">
            <p>Details about my education will be added here.</p>
          </Section>


          {/* Projects */}
          <Section id="projects" title="Projects">
            <Row className="g-4">
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Secure Code Gen with PEFT</Card.Title>
                    <Card.Text>
                      Fine-tuned CodeGen-2B (LoRA/IA3) for C/C++ secure code generation; evaluated with static analyzers.
                    </Card.Text>
                    <Button size="sm" variant="outline-primary" href="#">Read more</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Web Dev — TypeScript Apps</Card.Title>
                    <Card.Text>
                      React + Node/GraphQL apps: typed components, API integration, and testing.
                    </Card.Text>
                    <Button size="sm" variant="outline-primary" href="#">View on GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Section>

          {/* Publications */}
          <Section id="publications" title="Publications">
            <ul>
              <li>
                FTC 2025 (accepted): “Applying PEFT to Secure Code Generation”.
                To appear in <em>Springer Lecture Notes in Networks and Systems (LNNS)</em>.
              </li>
            </ul>
          </Section>

          {/* Hobbies */}
          <Section id="hobbies" title="Hobbies">
            <p>Photography, creative projects, and other personal interests will be shared here.</p>
          </Section>


          {/* Contact */}
          <Section id="contact" title="Contact">
            <p>
              Email: <a href="mailto:anwar.cse.mis@gmail.com">Click Here</a> ·{' '}
              LinkedIn: <a href="https://www.linkedin.com/in/mahasan22/" target="_blank" rel="noreferrer">My LindedIn</a>
            </p>
          </Section>

          <footer className="py-4 border-top">
            <Container className="text-muted">
              © {new Date().getFullYear()} Md Anwarul Hasan · Built with React-Bootstrap
            </Container>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}
