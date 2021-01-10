import React from "react";

function Blog(props) {
  return (
    <div id="blog">
      <section className="fh5co-blog d-flex">
        <div className="site-container">
          <h2 className="universal-h2 universal-h2-bckg">
            Managing Derector of Trippledev
          </h2>
          <div className="blog-slider blog-inner">
            <div className="single-blog">
              <div className="single-blog__img">
                <img
                  src="./images/safe_image.jfif"
                  className="img-fluid"
                  alt="blog image"
                />
              </div>
              <div className="single-blog__text">
                <h4>Its Software Development Consultency Channel</h4>
                <span>On August 28, 2020</span>
                <p>
                  <a
                    href="https://www.youtube.com/watch?v=VPIzIrPubvI"
                    target="_blank"
                  >
                    আমাদের স্লোগান হল সবার জন্য বিনা খরচে web development
                    শিক্ষা। আমরা পাইথন , জাভাস্ক্রিপ্ট,এবং পি এইচ পি কে একটি
                    প্লাটফর্ম এ নিয়ে আসতে যাচ্ছি । আমরা লারাভেল , নোড ,এবং
                    জাঙ্গো দিয়ে আলাদা আলাদা ভাবে তিনটি ইকমার্স দিয়ে শুরু করতে
                    যাচ্ছি ।যদিও ভালো র শেষ নেই ।তারপর ও আমরা স্ট্যান্ডার্ড এবং
                    প্রফেসনাল কোডিং শেখানোর চেষ্টা করব। এবং সকল ফিচার হ্যা সকল
                    ফিচার অন্তভূর্ক্ত রাখার চেষ্টা করব । আমরা আনুসঙ্গিক যেসব
                    টপিকস নিয়ে ধারাবাহিক সিরিজ নিয়ে আসছি ১:Django A-Z
                    ২:laravel A-Z ৩:Node js A-Z ৪: Machine learning ৫:Deep
                    Learning ৬:Micro services ৭:Cyber security 0-Hero ৮:React
                    Series ৯:Redux Series ১০:MongoDB Series ১১:Rest API'S(with
                    PPP, Node & Python) ১২:Error Handling আপনারা যদি লাইক কমেন্ট
                    subscribe করে পাশে থাকেন তো আমরা আশা করি আপনাদের ভালো কিছু
                    উপহার দিতে পারব। আমাদের জন্য যদি একজন প্রোগ্রামার একটি
                    ক্ষুদ্র জিনিস ও শিখতে পারে তাহলে আমরা নিজেদের ধন্য মনে করব ।
                    Click to check our team Channel
                  </a>
                </p>
              </div>
            </div>
            {/* <div className="single-blog ">
          <div className="single-blog__img">
            <img src="./images/blog2.PNG" className="img-fluid" alt="blog image" />
          </div>
          <div className="single-blog__text">
            <h4>React JS Introduction and Setup for Absolute Beginners</h4>
            <span>On April 28, 2020</span>
            <p>React tutorial for beginners 2017 / 2018,  Create React JS ES6 app with no build configuration using CLI create-react-app.  With React v16..</p>
          </div>
        </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
