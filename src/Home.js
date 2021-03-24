import React from 'react';

function Home(props) {
    return (
        <div id="home">
             <section className="fh5co-top-banner" >
    <div className="top-banner__inner site-container">
      <div className="top-banner__image d-none d-md-block d-lg-block">
        <img src="./images/me3.JPG" style={{height:'700px',width:'600px'}} alt="author image" />
      </div>
      <div className="top-banner__text">
        <div className="top-banner__text-up">
          <span className="brand-span">Hello! I'm</span>
          <h2 className="top-banner__h2">Golam</h2>
        </div>
        <div className="top-banner__text-down">
          <h2 className="top-banner__h2">Kibria</h2>
          <span className="brand-span">A FullStack JavaScript Developer & Online Instructor</span>
        </div>
        <p>Experience is the name everyone gives to their mistakes</p>
        <a href="https://www.facebook.com/profile.php?id=100005904976462" target="_blank" className="brand-button">Read bio &gt; </a>
      </div>
    </div>
  </section>
        </div>
    );
}

export default Home;