import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Kings League Infojobs API"
              description="The Kings League Infojobs API was a popular GLOBAL TRENDING repository OpenSource on GitHub that provided access to data about teams, players, and coaches in the league through an API. The web page also offered information about the results, and rankings etc I contributed to the project by writing tests, creating documentation, and working on the front-end."
              ghLink="https://github.com/https://github.com/midudev/kings-league-projectsoumyajit4419/Chatify"
              demoLink="https://kingsleague.dev/://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Modern Web 3.0 Blockchain"
              description="Web 3.0 application that has the potential to change the internet as we know it. I utilized advanced technologies such as React JS and Tailwind CSS to create a cutting-edge, functional, and stylish application. In addition to these technologies, I also utilized other skills related to Web 3.0 to create an application that is truly groundbreaking. The project has the potential to have a lasting impact on the way we use the internet, and I am proud to have been a part of its development"
              ghLink="https://github.https://github.com/Fasping/Modern-Web-3.0-Blockchain-App/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="JavaScript Videogame"
              description="This was my first project of 2021 and I'm thrilled to include it in my portfolio. It's a testament to my skills as a JavaScript developer and a great reminder of the good old days when all you needed was a browser and some code to have a good time. So go ahead, give it a try and see if you have what it takes to win"
              ghLink="https://github.com/Fasping/ProjectOneIronHack"
              demoLink="https://project-one-iron-hack.vercel.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Clicking with Typescript"
              description="This is a fun and interactive web app built with TypeScript. Simply click anywhere on the page to draw a circle, and use the undo and redo buttons to control your creations. It's a great way to relax and play around with shapes, and it's easy to use for all ages. Give it a try and see what kind of designs you can come up with! 💙"
              ghLink="https://github.com/Fasping/create-undo-circle-ts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Chart App"
              description="This is a kickass web app that compares player stats using super sleek bar charts. The app includes smooth animations when loading the bars and buttons that let you switch between different time ranges (7 days, 30 days, 90 days, 180 days). It's built using React.js, Vite.js, and Styled Components, so you know it's top quality. Go ahead and give it a try!."
              ghLink="https://github.com/Fasping/Chart_PLAYERS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Word Finding synonyms 🕵🏼"
              description="Need some synonym inspiration? This React JS app is here to help! It's a simple search engine that fetches synonyms for any word you enter, using the https://www.datamuse.com/api/. Never be stuck for a word again with this handy tool!"
              ghLink="https://github.com/Fasping/word-finding-synonymous"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
