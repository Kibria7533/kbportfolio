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
            <img src="./images/blog1.jpg" className="img-fluid" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>The Journey Under the Waves</h4>
            <span>On August 28, 2015</span>
            <p>Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.</p>
          </div>
        </div>
        <div className="single-blog ">
          <div className="single-blog__img">
            <img src="./images/blog2.jpg" className="img-fluid" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>The Journey Under the Waves</h4>
            <span>On August 28, 2015</span>
            <p>Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.</p>
          </div>
        </div>
       
      </div>
    </div>
  </section>
 
        </div>
    );
}

export default Blog;