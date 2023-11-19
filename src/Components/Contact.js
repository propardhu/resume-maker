import React, { Component } from "react";
import { Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    const d1 = this.props.data.displayGIF;
    let key = 0;
    return (
      <section id="contact">
        <div className="row">
        {d1.map((object, i) => <Slide key={key++} duration={1000}>
            <div className="six columns">
            <img
                src={object.src}
                alt={object.alt}
              />
            </div>
          </Slide>)}
          {/* <Slide left duration={1000}>
            <div className="six columns">
            <img
                src={d1[0].src}
                alt={d1[0].alt}
              />
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="six columns footer-widgets"> 
              <div className="widget widget_contact">
              <img
                src={d1[1].src}
                alt={d1[1].alt}
              />
              </div>

            </aside>
          </Slide> */}
        </div>
      </section>
    );
  }
}

export default Contact;
