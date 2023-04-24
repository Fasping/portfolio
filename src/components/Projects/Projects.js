import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import charts from "../../Assets/Projects/barras-app.png";
import synonymous from "../../Assets/Projects/synonymous.png";
import minigame from "../../Assets/Projects/minigame.png";
import kings from "../../Assets/Projects/kings.png";
import web3 from "../../Assets/Projects/web3.png";
import npmtiger from "../../Assets/Projects/npmtiger.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              isBlog={false}
              title="Modern Web 3.0 Blockchain"
              description="Web 3.0 application that has the potential to change the internet as we know it. I utilized advanced technologies such as React JS and Tailwind CSS to create a cutting-edge, functional, and stylish application. In addition to these technologies, I also utilized other skills related to Web 3.0 to create an application that is truly groundbreaking."
              ghLink="https://github.https://github.com/Fasping/Modern-Web-3.0-Blockchain-App/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npmtiger}
              isBlog={false}
              title="Tiger Router 
              ( Routing solution )"
              description="Tiger Router offers only the essentials for seamless navigation within your React application. With its intuitive and user-friendly interface, you can easily define your routes and render your components with just a few lines of code. Tiger Router includes Router, Route, and Link components, making it a comprehensive solution for all your routing needs.

              Is available as an NPM package, making it easy for developers to install and integrate into their React projects."
              ghLink="https://github.com/Fasping/tiger-router"
              demoLink="https://www.npmjs.com/package/tiger-router"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charts}
              isBlog={false}
              title="Display Data in Chart App"
              description="This is a kickass web app that compares player stats using super sleek bar charts. The app includes smooth animations when loading the bars and buttons that let you switch between different time ranges (7 days, 30 days, 90 days, 180 days). It's built using React.js, Vite.js, and Styled Components, so you know it's top quality. Go ahead and give it a try!."
              ghLink="https://github.com/Fasping/Chart_PLAYERS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synonymous}
              isBlog={false}
              title="Word Finding Synonyms"
              description="Need some synonym inspiration? Let React JS be your wingman! This simple search engine is like a personal thesaurus that fetches synonyms for any word you enter, using the https://www.datamuse.com/api/. Never be stuck for a word again and impress your friends, colleagues and family with your vast vocabulary using this handy tool!"
              ghLink="https://github.com/Fasping/word-finding-synonymous"
              demoLink="https://word-finding-synonymous.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kings}
              isBlog={false}
              title="OpenSource Collaboration"
              description="The Kings League Infojobs API was a popular GLOBAL TRENDING repository OpenSource on GitHub that provided access to data about teams, players, and coaches in the league through an API. The web page also offered information about the results, and rankings... I have the opportunity to be contributor to the project by writing tests, creating documentation, and working on the front-end side."
              ghLink="https://github.com/midudev/kings-league-project"
              demoLink="https://kingsleague.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minigame}
              isBlog={false}
              title="JavaScript MiniGame"
              description="This was my first project of 2021 for my TechSchool and I'm thrilled to include it in my portfolio. It's a testament to my skills as a JavaScript developer and a great reminder of the good old days when all you needed was a browser and some code to have a good time. So go ahead, give it a try and see if you have what it takes to win"
              ghLink="https://github.com/Fasping/ProjectOneIronHack"
              demoLink="https://project-one-iron-hack.vercel.app//"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
