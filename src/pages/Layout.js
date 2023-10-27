import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../img/titan_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="sm"
      className="bg-body-tertiary"
    >
      <LinkContainer to="/">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="125"
            height="75"
            className="d-inline-block align-top"
            alt="Team Titans Logo"
          />
        </Navbar.Brand>
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
