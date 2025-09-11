import { FC } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <aside
      className="bg-light border-end py-4 sidebar"
      aria-label="Site navigation"
    >
      <header className="px-3 mb-4">
        <Link to="/" className="navbar-brand fw-semibold text-decoration-none">
          Md Anwarul Hasan
        </Link>
      </header>

      <nav className="px-3">
        <Nav className="flex-column">
          {/* Full-page route */}
          <Nav.Link as={Link} to="/about">About</Nav.Link>

          {/* In-page anchors on the home page */}
          <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
          <Nav.Link as={Link} to="/education">Education</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/certifications">Certifications</Nav.Link>
          <Nav.Link as={Link} to="/publications">Publications</Nav.Link>
          {/* <Nav.Link href="#hobbies">Hobbies</Nav.Link> */}
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </nav>
    </aside>
  );
};

export default Sidebar;
