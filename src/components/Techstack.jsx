import { Container, Row, Col } from "react-bootstrap";
import { info } from "../info/Info";

function Techstack() {
  // Filter by category
  const languages = info.technologies.filter(
    (technology) => technology.category === "language"
  );
  const frameworks = info.technologies.filter(
    (technology) => technology.category === "framework"
  );
  const databases = info.technologies.filter(
    (technology) => technology.category === "database"
  );

  return (
    <Container id="tech-stack">
      <Row className="m-3">
        <h2>Tech Stack</h2>
        <p>
            Please hover over an icon to see examples of my work utilizing that
            technology.
        </p>
      </Row>
      <Row xs={2} md={4} lg={6} className="m-1">
        {info.technologies.map((item, index) => (
          <Col className="d-flex justify-content-center">
            <div key={index} className="m-1">
              <i className={item.icon}></i>
              <div>{item.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Techstack;
