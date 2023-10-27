import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col>&copy; {new Date().getFullYear()} Team Titans Robotics</Col>
        </Row>
      </Container>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 0",
};

export default Footer;
