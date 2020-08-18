import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      messege: ""
    }
  }
  notify = () => toast("Email has been send!");
  save = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submit = async (e) => {
    e.preventDefault();
    try {
      this.notify();
      await axios.post('http://localhost:5000/sendmail', this.state)
      
    } catch (error) {
      
    }
    
  }
  render() {

    return (
      <div >
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
                  <p className="footer-phone">Phone: +8801720588884</p>
                  <p>Email : tenminuteversity@gmail.com</p>
                  <div className="social-icons">
                    <a href="https://twitter.com/ominuteversity" target="_blank"><img src="./images/social-twitter.png" alt="social icon" /></a>
                    <a href="https://www.pinterest.es/tenminuteversity/boards/" target="_blank"><img src="./images/social-pinterest.png" alt="social icon" /></a>
                    <a href="https://www.youtube.com/channel/UCKpbhNRh9pp1UHFAHsGcunQ?view_as=subscriber" target="_blank"><img src="./images/social-youtube.png" alt="social icon" /></a>
                    <a href="#" target="_blank"><img src="./images/social-twitter.png" alt="social icon" /></a>
                  </div>
                </div>
              </div>
              <div className="footer-contact-form">
                <h5>Contact Form</h5>
                <form className="contact-form" onSubmit={this.submit}>
                  <div className="contact-form__input">
                    <input type="text" name="name" onChange={this.save} value={this.state.name} placeholder="Name" />
                    <input type="email" name="email" onChange={this.save} value={this.state.email} placeholder="Email" required />
                  </div>
                  <textarea name="messege" onChange={this.save} value={this.state.messege} />
                  <input type="submit" name="submit"  defaultValue="Submit" className="submit-button" />
                </form>
           
                <ToastContainer
position="bottom-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      
                
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="site-container footer-bottom-inner">
              <p>© 2020 Kibria | Design by Md Golam Kibria | All rights Reserved.</p>

            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default Footer;