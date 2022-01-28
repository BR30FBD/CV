import React from "react";
import Contact from "../contact";
import Fact from "../fact";
import Portfolio from "../portfolio";
import Resum from "../resum";
import Services from "../services";
import Skill from "../skill";
import Testimonials from "../testimonials";

const About = () => {
  return (
    <>
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                Hi, I’m Nitish. I'm a multi-talented human with over 1+ years of
                experiences in wide range of design disciplines. You can also
                call me a product designer, experience designer, interaction,
                UI, UX or by any other market defined function-title. I'm also a
                multi-disciplinary maker with over one years of experiences in
                wide range of design disciplines,advisor, entrepreneur,
                front-end developer, and more.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src="assets/img/nitish.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>UI/UX Designer &amp; Web Developer.</h3>
                <p className="fst-italic">
                  I don’t like to define myself by the work I’ve done. I define
                  myself by the work I want to do. Skills can be taught,
                  personality is inherent. I prefer to keep learning, continue
                  challenging myself, and do interesting things that matter.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>30 December 2002</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span><a href="https://github.com/HackerNITISH" style={{textDecoration:"none",color:"black"}}>GitHub</a></span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+91 8287049939</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Faridabad,India</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>19</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Bachelor(pursuing)</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>kushwaha30nitish2002@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  My abundant energy fuels me in the pursuit of many interests,
                  hobbies, areas of study and artistic endeavors. I’m a fast
                  learner, able to pick up new skills and juggle different
                  projects and roles with relative ease. 
                </p>
              </div>
            </div>
          </div>
        </section>

        <Fact />

        <Skill />
        <Resum />
        <Portfolio />

        <Services />
        <Testimonials />

        <Contact />
      </main>
    </>
  );
};

export default About;
