import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataaars.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p className="home-about-body">
              I am a <b className="purple">Frontend developer </b>
              who likes to craft solid and scalable frontend products with great
              user experience.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, React.js, Css, Git , Jest and more! </b>
              </i>
              <br />
              <br />
              When I'm not coding, you can find me at the in beach&nbsp;
              <i>
                <b className="purple">surfing, climbing or traveling </b> the
                world search of new adventures. Or, if the weather isn't
                cooperating, you might find me curled up on the couch with a
                good book or<b className="purple"> video game</b> .
              </i>
              <br />
              <br />I am a contributor to <b className="purple">OpenSource </b>
              projects on GitHub one of them have become
              <i>
                <b className="purple"> trending globally repository</b>.
              </i>
              &nbsp; I participate in the development and maintenance of these
              projects by submitting code, fixing bugs, and suggesting
              improvements.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Fasping"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fernandocases94/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
