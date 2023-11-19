import React, { Component } from "react";
import Fade from "react-reveal";
import { BsGithub, BsLinkedin, BsWhatsapp, BsMedium } from "react-icons/bs";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;
    let id = 0;
    const social = this.props.data.social.map(function (s) {
      return (
        <li key={id++}>
          <a target="_blank" rel="noreferrer" href={s.url}>
            {
              s.name === "linkedin"? <BsLinkedin /> : s.name === "github"? <BsGithub /> : s.name === "whatsapp" ? <BsWhatsapp /> : <BsMedium /> 
            }
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
                {social}
              </ul>
              <a target="_blank" rel="noreferrer" href="https://github.com/propardhu/gparthasai">Designed by Pardhu</a>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
