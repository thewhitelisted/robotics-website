import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import logo_y from "./img/titan_logo_y.png";

import { initializeApp } from "firebase/app";
initializeApp({
  apiKey: "AIzaSyDzxhN6dTqNwnNyto5FX8RxZj7xkI7xFhI",
  authDomain: "robotics-website-5f6b4.firebaseapp.com",
  projectId: "robotics-website-5f6b4",
  storageBucket: "robotics-website-5f6b4.appspot.com",
  messagingSenderId: "520942584204",
  appId: "1:520942584204:web:73727b1e37b928ef98d6a9", // config
});

function App() {
  return (
    <div>
      {/* Header */}
      <header className="bg-burg bg-gradient text-white py-3">
        <Container>
          <Row>
            <Col className="my-auto">
              <h1>Team Titans Robotics</h1>
              <h2>FTC 19446/7</h2>
            </Col>
            <Col>
              <img
                src={logo_y}
                width="684"
                height="362"
                alt="Team Titans Logo Yellow"
              />
            </Col>
          </Row>
        </Container>
      </header>

      {/* About Us Section */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              Introduce your robotics team, its mission, values, and a brief
              history. Highlight key achievements and your team's commitment to
              innovation.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
