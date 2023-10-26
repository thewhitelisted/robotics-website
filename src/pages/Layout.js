import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <LinkContainer to="/">
        <Navbar.Brand href="/">Team Titans Robotics</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <LinkContainer to="/">
            <Nav.Link eventKey={1} href="/">
              Home
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/our-team">
            <Nav.Link eventKey={2} href="/our-team">
              Our Team
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Layout;
