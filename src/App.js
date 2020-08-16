import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
  
  {/* Navigation */}
  <nav className="site-navigation">
    <div className="site-navigation-inner site-container">
      <img src="./images/site-logo.png" alt="site logo" />
      <div className="main-navigation">
        <ul className="main-navigation__ul">
          <li><a href="#">Homepage</a></li>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
          <li><a href="#">Page 4</a></li>
        </ul>
      </div>
      <div id="myBtn" className="burger-container" onclick="myFunction(this)">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    </div>
  </nav>
  {/* Navigation end */}
  {/* Top banner */}
  <section className="fh5co-top-banner">
    <div className="top-banner__inner site-container">
      <div className="top-banner__image">
        <img src="./images/me2.jpg" style={{height:'700px',width:'600px'}} alt="author image" />
      </div>
      <div className="top-banner__text">
        <div className="top-banner__text-up">
          <span className="brand-span">Hello! I'm</span>
          <h2 className="top-banner__h2">Golam</h2>
        </div>
        <div className="top-banner__text-down">
          <h2 className="top-banner__h2">Kibria</h2>
          <span className="brand-span">A FullStack JavaScript Developer</span>
        </div>
        <p>Experience is the name everyone gives to their mistakes</p>
        <a href="#" className="brand-button">Read bio &gt; </a>
      </div>
    </div>
  </section>
  {/* Top banner end */}
  {/* About me */}
  <section className="fh5co-about-me">
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
          <div className="about-me-single-slide">
            <p><span>B</span>eing self-motivator is my strength and along with it my self confidence & positive attitude helped me a lot to deliver the maximum that I can do.
Since my childhood I have participated in many competitions and being successful in many enhanced my confidence levels. I took part in organizing few of my college events through which I have imbibed various qualities like team work, decision making and gained necessary soft skills needed to handle tricky situations.
My goal is to be a part of Bangladesh Software Industry. I'll work for Bangladesh and to shape a bright future for the country and to make a lasting impact with my ideas in the sphere I work in.I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization..</p>
            <p className="p-white">See me</p>
          </div>
        </div>
      </div>
    </div>
    <div className="about-me-bckg" />
  </section>
  {/* About me end */}
  {/* Books and CD */}
  <section className="fh5co-books">
    <div className="site-container">
      <h2 className="universal-h2 universal-h2-bckg">Some of my Projects</h2>
      <div className="books-brand-button">
        <a href="#" className="brand-button">View more</a>
      </div>
    </div>
  </section>
  {/* Books and CD end */}
  {/* Counter */}
  <div className="fh5co-counter counters">
    <div className="counter-inner site-container">
      <div className="single-count">
        <span className="count" data-count={50}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-1.png" alt="counter icon" />
          <p>Books</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={600}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-2.png" alt="counter icon" />
          <p>Pages</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={2000}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-3.png" alt="counter icon" />
          <p>Sales</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={125}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-4.png" alt="counter icon" />
          <p>Awards</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={125}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-4.png" alt="counter icon" />
          <p>Awards</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={125}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-4.png" alt="counter icon" />
          <p>Awards</p>
        </div>
      </div>
      <div className="single-count">
        <span className="count" data-count={125}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-4.png" alt="counter icon" />
          <p>Awards</p>
        </div>
      </div> <div className="single-count">
        <span className="count" data-count={125}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-4.png" alt="counter icon" />
          <p>Awards</p>
        </div>
      </div> <div className="single-count">
        <span className="count" data-count={125}>0</span>
        <div className="single-count__text">
          <img src="./images/counter-4.png" alt="counter icon" />
          <p> AwardsAwardsAwardsAwardsAwards</p>
        </div>
      </div>

    </div>
  </div>
  {/* Counter */}
  {/* Blog */}
  <section className="fh5co-blog">
    <div className="site-container">
      <h2 className="universal-h2 universal-h2-bckg">My Blog</h2>
      <div className="blog-slider blog-inner">
        <div className="single-blog">
          <div className="single-blog__img">
            <img src="./images/blog1.jpg" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>The Journey Under the Waves</h4>
            <span>On August 28, 2015</span>
            <p>Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.</p>
          </div>
        </div>
        <div className="single-blog">
          <div className="single-blog__img">
            <img src="./images/blog2.jpg" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>The Journey Under the Waves</h4>
            <span>On August 28, 2015</span>
            <p>Quisque vel sapi nec lacus adipis cing bibendum nullam porta lites laoreet aliquam.velitest, tempus a ullamcorper et, lacinia mattis mi. Cras arcu nulla, blandit id cursus et, ultricies eu leo.</p>
          </div>
        </div>
        <div className="single-blog">
          <div className="single-blog__img">
            <img src="./images/blog2.jpg" alt="blog image" />
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
  {/* Blog end */}
  {/* Quotes */}
  <section className="fh5co-quotes">
    <div className="site-container">
      <div className="about-me-slider">
        <div>
          <h2 className="universal-h2 universal-h2-bckg">What People Are Saying</h2>
          <p>“Pudding croissant cake candy canes fruitcake sweet roll pastry gummies sugar plum. Tart pastry danish soufflé donut bear claw chocolate cake marshmallow chupa chups. Jelly danish gummi bears cake donut powder chocolate cake. Bonbon soufflé lollipop biscuit dragée jelly-o. Wafer pastry pudding tiramisu chocolate bar croissant cake. Pie caramels gummies danish.”</p>
          <img src="./images/quotes.svg" alt="quotes svg" />
          <h4>David Dixon</h4>
          <p>Reader</p>
        </div>
        <div>
          <h2 className="universal-h2 universal-h2-bckg">What People Are Saying 2</h2>
          <p>“Pudding croissant cake candy canes fruitcake sweet roll pastry gummies sugar plum. Tart pastry danish soufflé donut bear claw chocolate cake marshmallow chupa chups. Jelly danish gummi bears cake donut powder chocolate cake. Bonbon soufflé lollipop biscuit dragée jelly-o. Wafer pastry pudding tiramisu chocolate bar croissant cake. Pie caramels gummies danish.”</p>
          <img src="./images/quotes.svg" alt="quotes svg" />
          <h4>David Dixon</h4>
          <p>Reader</p>
        </div>
      </div>
    </div>
  </section>
  {/* Quotes end */}
  {/* Social */}
  <section className="fh5co-social">
    <div className="site-container">
      <div className="social">
        <h5>Follow me!!</h5>
        <div className="social-icons">
          <a href="#" target="_blank"><img src="./images/social-twitter.png" alt="social icon" /></a>
          <a href="#" target="_blank"><img src="./images/social-pinterest.png" alt="social icon" /></a>
          <a href="#" target="_blank"><img src="./images/social-youtube.png" alt="social icon" /></a>
          <a href="#" target="_blank"><img src="./images/social-twitter.png" alt="social icon" /></a>
        </div>
        <h5>Share it!</h5>
      </div>
    </div>
  </section>
  {/* Social */}
  {/* Footer */}
  <footer className="site-footer">
    <div className="site-container">
      <div className="footer-inner">
        <div className="footer-info">
          <div className="footer-info__left">
            <img src="./images/footer-img.jpg" alt="about me image" />
            <p>Read more about me</p>
          </div>
          <div className="footer-info__right">
            <h5>Get In Touch</h5>
            <p className="footer-phone">Phone: +958734902847</p>
            <p>Email : Jhone@Example.com</p>
            <div className="social-icons">
              <a href="#" target="_blank"><img src="./images/social-twitter.png" alt="social icon" /></a>
              <a href="#" target="_blank"><img src="./images/social-pinterest.png" alt="social icon" /></a>
              <a href="#" target="_blank"><img src="./images/social-youtube.png" alt="social icon" /></a>
              <a href="#" target="_blank"><img src="./images/social-twitter.png" alt="social icon" /></a>
            </div>
          </div>
        </div>
        <div className="footer-contact-form">
          <h5>Contact Form</h5>
          <form className="contact-form">
            <div className="contact-form__input">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <textarea defaultValue={""} />
            <input type="submit" name="submit" defaultValue="Submit" className="submit-button" />
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="site-container footer-bottom-inner">
        <p>© 2019 Author | Design by <a href="https://freehtml5.co/" target="_blank">freehtml5.co</a> | All rights Reserved.</p>
        <div className="footer-bottom__img">
          <img src="./images/footer-mastercard.png" alt="footer image" />
          <img src="./images/footer-paypal.png" alt="footer image" />
          <img src="./images/footer-visa.png" alt="footer image" />
          <img src="./images/footer-fedex.png" alt="footer image" />
          <img src="./images/footer-dhl.png" alt="footer image" />
        </div>
      </div>
    </div>
  </footer>
</div>

  );
}

export default App;
