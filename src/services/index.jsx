import React from "react";

const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
            Freelance Web Designer & Developer based in Delhi NCR, Faridabad.
Highly experienced in designing & developing custom  websites.
            
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <a href="/#">Making UI</a>
              </h4>
              <p className="description">
                Provide a better qulity and most attractive 
                and responsive websites.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <a href="/#">Debugging & Fixing </a>
              </h4>
              <p className="description">
              Debugging errors occurring in code and fixing it.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <a href="/#">SEO</a>
              </h4>
              <p className="description">
              We make sites according to search engine optimization.

              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Services;
