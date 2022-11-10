import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Nando</h2>
        <div className="prompt">
          <p>I like to craft solid and scalable frontend products with great user experience</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/fernandocases94/', '_blank')}/>
          <GithubIcon onClick={() => window.open('https://github.com/Fasping', '_blank')}/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Javascript, HTML, CSS, 
              SASS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Others</h2>
            <span>Git, Npm, Jira</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
