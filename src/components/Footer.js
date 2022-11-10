import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/fernandocases94/', '_blank')}/>
        <GithubIcon onClick={() => window.open('https://github.com/Fasping', '_blank')}/>
      </div>
      <p> &copy; Fernando Cases | 2022</p>
    </div>
  );
}

export default Footer;