import React from 'react';

function Blog(props) {
    return (
        <div id="blog">
            <section className="fh5co-blog d-flex">
    <div className="site-container">
      <h2 className="universal-h2 universal-h2-bckg">My Blog</h2>
      <div className="blog-slider blog-inner">
        <div className="single-blog">
          <div className="single-blog__img">
            <img src="./images/blog1.PNG" className="img-fluid" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>Its a mern stack basic series</h4>
            <span>On August 28, 2019</span>
            <p>MERN Stack Series (Mongodb + Express + React + NodeJs) Tutorial with project - Introduction</p>
          </div>
        </div>
        <div className="single-blog ">
          <div className="single-blog__img">
            <img src="./images/blog2.PNG" className="img-fluid" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>React JS Introduction and Setup for Absolute Beginners</h4>
            <span>On April 28, 2020</span>
            <p>React tutorial for beginners 2017 / 2018,  Create React JS ES6 app with no build configuration using CLI create-react-app.  With React v16..</p>
          </div>
        </div>
       
      </div>
    </div>
  </section>
 
        </div>
    );
}

export default Blog;