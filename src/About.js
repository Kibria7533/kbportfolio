import React from 'react';

function About(props) {
    return (
        <div>
             <section className="fh5co-about-me"  id="about">
    <div className="about-me-inner site-container">
      <article className="portfolio-wrapper">
        <div className="portfolio__img">
          <img src="./images/me.jpg" className="about-me__profile" alt="about me profile picture" />
        </div>
        <div className="portfolio__bottom">
          <div className="portfolio__name">
            <span>G</span>
            <h2 className="universal-h2">olam kibria</h2>
          </div>
          <p>I am a programmer</p>
        </div>
      </article>
      <div className="about-me__text">
        <div className="about-me-slider">
          <div className="about-me-single-slide">
            <h2 className="universal-h2 universal-h2-bckg">About me</h2>
            <p><span>M</span>y name is Kibria. I'm from Dinajpur District. I've passed SSC & HSC from Kholahati Degree College in 2012 & 2014 respectively and my results are GPA 4.94 & 4.74 respectively,
Recently i have completed B.sc Engineering from Islamic University in Computer Scince & Engineering and my  CGPA is .....  Regarding my family we are 6.  My father Afzal Hossain is a farmer and my mother Regina Begum is a home maker.I am the younger one.
My hobbies are solving problems, surfing the internet, hanging out with my friends and watching cricket matches in my leisure time.
I would like to spend most of my time with my family.
</p>
            <p className="p-white">See me</p>
          </div>
         
        </div>
      </div>
    </div>
    <div className="about-me-bckg" />
  </section>
        </div>
    );
}

export default About;