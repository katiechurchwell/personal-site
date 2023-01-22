import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/Resume-Churchwell.pdf";
import { info } from "../data/info";

function Resume() {
  return (
    <Container>
      <Row className="m-3" id="resume-download">
        <a href={resume} download="Resume - Churchwell.pdf">
          <button type="button" className="btn btn-dark">
            Download
          </button>
        </a>
      </Row>
      <Row className="m-3">
        <h2>Katie Churchwell</h2>
      </Row>
      <Row className="m-3">
        <h3>Experience</h3>
      </Row>
      <Row className="m-3">
        {info.resume.map((role, index) => (
          <>
            <Row key={`role-${index}`}>
              {role.position}, {role.dates}
              <a href={role.company.website} target="_blank">{role.company.name}</a>
            </Row>
            <ul>
              {role.responsibilities.map((responsibility, index) => (
                <li key={`responsibility-${index}`}>{responsibility}</li>
              ))}
            </ul>
          </>
        ))}
      </Row>

      <Row className="m-3">
        <h3>Education</h3>
      </Row>
      <Row className="m-3">
        Full Stack Web Development Certificate, 2021 - 2022
        <p>University of Oregon Bootcamps</p>
        Bachelor of Arts in International Business, 2013 - 2016
        <p>University of South Florida</p>
      </Row>
      <Row className="m-3">
        <h3>Volunteer Work</h3>
      </Row>
      <Row className="m-3">
        Open Source Contributor, 2022
        <a href="https://github.com/mozilla/protocol" target="_blank">Mozilla Protocol</a>
        <ul>
          <li>
            Design system for Mozilla and Firefox websites. It establishes a
            common design language, provides reusable coded components and
            outlines high level guidelines for content and accessibility.
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default Resume;
