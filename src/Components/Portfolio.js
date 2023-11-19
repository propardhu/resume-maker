import React, { Component } from "react";
// import Zmage from "react-zmage";

let id = 0;
class Portfolio extends Component {
  
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" >
            <a target="_blank" rel="noreferrer" href={projects.url}>
              <img style={{height:"100px"}} alt={projects.title} src={projectImage} />
              <a target="_blank" rel="noreferrer" href={projects.url} style={{ textAlign: "center",height: "60px",width:"100%" }}>{projects.title}</a>
            </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
          <div className="row">
            <div>
              <h1 style={{ color: "#000524"}}>Check Out My medium Articles</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
                style={{ textAlign: "center" }}
              >
                {projects}
              </div>

              <h1 style={{ color:"#000524" }}><i>Note: {this.props.data.note}</i></h1>
            </div>
          </div>
      </section>
    );
  }
}

export default Portfolio;
