import React from "react";
import "./Main_1.css";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <div className="header overlay">
        {/* <!-- Header Content --> */}
        <div className="header-content">
          <div className="container">
            <div className="info col-md-7">
              <h2 className="upper main-color">we are ready to help you</h2>
              <h3 className="upper h1">
                providing guidance & mentorship <br /> with practical strategies
              </h3>
              <p>
                At The Connect Dot Corp., we provide the necessary guidance and
                support to make informed choices.
              </p>
              <a className="btn opacity" target="_blank" href="/signup">
                Register Here
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Section*/}
      {/*Start Request a cal*/}
      <div className="header-bottom">
        <div className="container">
          <div className="row space-btween">
            <div className="call-info">
              <h4>Request a call back right now ?</h4>
              <p>Let's get in touch to know more about you</p>
            </div>
            <div className="contact txt-right">
              <a href="#Contact">
                <button className="btn">contact us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*End Request a call*/}

      {/*Start Our Services*/}
      <div className="services pd-t-b-50">
        <div className="container">
          <div className="services-header txt-center">
            <h2 className="h2 capital mg-bottom-15">
              Our <span className="main-color">services</span>
            </h2>
            <p className="upper">Take one step towards your goal.</p>
          </div>
          <div className="services-content">
            <div className="row">
              <div className="grid col-md-4">
                <div className="services-item" style={{ height: "450px" }}>
                  <div className="imge">
                    <img
                      className="responsive-img"
                      src="https://i.ibb.co/pnGgG62/4.jpg"
                      alt="4"
                      border="0"
                    />
                  </div>
                  <div className="services-item-info">
                    <h3 className="capital">Building Projects</h3>
                    <p>
                      Providing students hand on experience through Intern's and
                      Projects.
                    </p>
                    {/* <a className="btn opacity" href="#">read more</a> */}
                  </div>
                </div>
              </div>
              <div className="grid col-md-4">
                <div className="services-item" style={{ height: "450px" }}>
                  <div className="imge">
                    <img
                      className="responsive-img"
                      src="https://i.ibb.co/sPjP4rL/6.jpg"
                      alt="6"
                      border="0"
                    />
                  </div>
                  <div className="services-item-info">
                    <h3 className="capital">Career Counselling </h3>
                    <p>
                      we offer assistance with industrial training programs
                      tailored to student’s interests and skills.
                    </p>
                    {/* <a className="btn opacity" href="#">read more</a> */}
                  </div>
                </div>
              </div>
              <div className="grid col-md-4">
                <div className="services-item" style={{ height: "450px" }}>
                  <div className="imge">
                    <img
                      className="responsive-img"
                      src="https://i.ibb.co/5Wnr7qX/1.jpg"
                      alt="1"
                      border="0"
                    />
                  </div>
                  <div className="services-item-info">
                    <h3 className="capital">Mentoring</h3>
                    <p>
                      we connect students with mentors from recognized
                      organizations and esteemed companies.
                    </p>
                    {/* <a className="btn opacity" href="#">read more</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Our Services */}

      {/* <!-- Start Solution For Students */}
      <div className="solution overlay pd-t-b-50">
        <div className="container">
          <div className="row flex-col space-btwen">
            <div className="grid col-sm-11 col-md-9 col-lg-6">
              <div className="left-item">
                <p className="upper">Take one step towards your goal</p>
                <h2 className="h2 mg-bottom-15">
                  Our solutions for your
                  <span className="main-color"> growth</span>
                </h2>
                <p className="desc">
                  Our mission is to help students connect their future
                  aspirations with practical plans, ensuring a seamless and
                  successful journey into their chosen careers.
                </p>
                <p className="desc">
                  Through our platform, students have access to mentors who are
                  experienced professionals from recognized organizations and
                  esteemed companies. These mentors offer valuable insights and
                  advice based on their own career journeys.
                </p>
                <p className="desc">
                  We facilitate connections between students and industry
                  professionals, enabling students to expand their professional
                  network and gain valuable contacts in their chosen fields.
                </p>
                {/* <a className="btn" href="#">read more</a> */}
              </div>
            </div>
            <div className="grid col-lg-6">
              <div className="right-item txt-center">
                <div className="row flex-wrap">
                  <div className="grid col-xsm-6 col-sm-6 col-md-3 col-lg-6">
                    <div className="box">
                      <span className="main-color">945</span>
                      <p>work hours</p>
                    </div>
                  </div>
                  <div className="grid col-xsm-6 col-sm-6 col-md-3 col-lg-6">
                    <div className="box">
                      <span className="main-color">1280</span>
                      <p>great reviews</p>
                    </div>
                  </div>
                  <div className="grid col-xsm-6 col-sm-6 col-md-3 col-lg-6">
                    <div className="box">
                      <span className="main-color">578</span>
                      <p>Mentored</p>
                    </div>
                  </div>
                  <div className="grid col-xsm-6 col-sm-6 col-md-3 col-lg-6">
                    <div className="box">
                      <span className="main-color">10</span>
                      <p>awards won</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Solution For Students */}

      {/* <!-- Start About Our Company */}
      <div className="about-company pd-t-b-50">
        <div className="container">
          <div className="row">
            <div className="grid col-md-6 hidden-xs">
              <div className="left-image">
                <img
                  className="responsive-img"
                  src="https://i.ibb.co/hBnQ8d0/8.jpg"
                  alt="8"
                  border="0"
                />
              </div>
            </div>
            <div className="grid col-md-10 col-lg-6">
              <div className="right-info">
                <p className="upper">who we are</p>
                <h2 className="h2 mg-bottom-15">
                  Get to know about
                  <span className="main-color"> our company</span>
                </h2>
                <p className="desc">
                  The Connect Dot Corp. is a dedicated company focused on
                  providing guidance and mentorship to students as they navigate
                  the transition from college to the corporate world. Our
                  primary mission is to assist students in aligning their future
                  aspirations with practical strategies, facilitating a seamless
                  and triumphant journey into their chosen careers. We deeply
                  comprehend the daunting challenges students encounter when
                  confronted with crucial decisions concerning their future
                  paths, whether it involves selecting postgraduate degrees,
                  exploring research opportunities, pursuing MS programs, or
                  preparing for competitive exams. At The Connect Dot Corp., we
                  proudly offer the indispensable guidance and unwavering
                  support needed to ensure well-informed choices.
                </p>
                {/* <a className="btn opacity" href="#">read more</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End About Our Company */}

      {/* start of Mentee Section */}
      <div className="solution overlay pd-t-b-50">
        <div className="container">
          <div className="row flex-col space-btwen">
            <div className="services-header txt-center">
              <h2 className="h2 capital mg-bottom-15">
                <span className="main-color">Mentee services</span>
              </h2>
              <p className="upper">
                Join us to learn and develop skills in Growing Environment
              </p>
            </div>
            <div className="services-content">
              <div className="row text-dark">
                <div className="grid col-md-4">
                  <div className="services-item " style={{ height: "550px" }}>
                    <div className="imge">
                      <img
                        className="responsive-img"
                        src="./Media logos/Mentoring.jpg"
                        alt="4"
                        border="0"
                      />
                    </div>
                    <div className="services-item-info">
                      <h3 className="capital">Mentorship</h3>
                      <p>
                        We provides mentorship programs that connect students
                        with experienced professionals from recognized
                        organizations and esteemed companies.
                      </p>
                      <a className="btn opacity" target="_blank" href="/signup">
                        Register Here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-md-4">
                  <div className="services-item" style={{ height: "550px" }}>
                    <div className="imge">
                      <img
                        className="responsive-img"
                        src="./Media logos/Apprenticeship.jpg"
                        alt="6"
                        border="0"
                      />
                    </div>
                    <div className="services-item-info">
                      <h3 className="capital">Skill Development</h3>
                      <p>
                        We Provide and ensures that apprentices receive
                        comprehensive training and mentorship to maximize their
                        learning and growth.
                      </p>
                      <a className="btn opacity" target="_blank" href="/signup">
                        Register Here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-md-4">
                  <div className="services-item" style={{ height: "550px" }}>
                    <div className="imge">
                      <img
                        className="responsive-img"
                        src="./Media logos/Internship.jpg"
                        alt="1"
                        border="0"
                      />
                    </div>
                    <div className="services-item-info">
                      <h3 className="capital">Internship</h3>
                      <p>
                        We offers internship opportunities designed to provide
                        students with practical exposure and enhance their skill
                        sets.
                      </p>
                      <a className="btn opacity" target="_blank" href="/signup">
                        Register Here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end of Mentee Section */}
      {/* <!-- Start They Say About Us */}
      <div className="what-say pd-t-b-50">
        <div className="container">
          <div className="what-say-header txt-center">
            <h2 className="h2 capital mg-bottom-15">
              what they say <span className="main-color">about us</span>
            </h2>
            <p className="upper">Thanks to them we are here 😉</p>
          </div>
          <div className="what-say-content">
            <div className="row">
              <div className="grid what-width">
                <div className="person relative">
                  <div className="person-info txt-center">
                    <h3 className="capital">Manish Kumar</h3>
                    <h4 className="main-color">Software Engineer</h4>
                    <p>
                      From the very beginning, The Connect Dot Corp. stood out
                      to me with their dedication and commitment to helping
                      students transition smoothly from college to the corporate
                      world. The guidance I received was invaluable in aligning
                      my future aspirations with practical plans, ensuring a
                      seamless transition into the software engineering field.
                    </p>
                  </div>
                  <img
                    src="https://i.ibb.co/L1qR4bJ/1.png"
                    alt="1"
                    border="0"
                  />
                </div>
              </div>
              <div className="grid what-width">
                <div className="person relative">
                  <div className="person-info txt-center">
                    <h3 className="capital">Sunil Goyal</h3>
                    <h4 className="main-color">chief financial analyst</h4>
                    <p>
                      The team at The Connect Dot Corp. understands the
                      challenges that students face when making crucial
                      decisions about their career paths. They provided me with
                      personalized support and expert advice, helping me
                      navigate through the complex landscape of postgraduate
                      degrees, research opportunities, and competitive exams.
                    </p>
                  </div>
                  <img
                    src="https://i.ibb.co/2vm590t/8.png"
                    alt="8"
                    border="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End They Say About Us */}

      {/* <!-- Start Contact Us */}
      <div id="Contact" className="contact-us pd-t-b-50">
        <div className="container">
          <div className="contact-us-header txt-center">
            <h2 className="h2 capital mg-bottom-15">
              request a <span className="main-color">call back</span>
            </h2>
            <p className="upper">Let us know more about you.</p>
          </div>
          <div className="contact-us-form">
            <form action="">
              <div className="row flex-wrap">
                <div className="grid col-xsm-12 col-sm-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <input
                      className="general-input"
                      name="fname"
                      type="text"
                      placeholder="full name"
                      autoComplete="true"
                    />
                  </div>
                </div>
                <div className="grid col-xsm-12 col-sm-12 col-md-6 col-lg-4">
                  <div className="form-group">
                    <input
                      className="general-input"
                      name="email"
                      type="email"
                      placeholder="E-Mail address"
                    />
                  </div>
                </div>
                <div className="grid col-xsm-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="form-group">
                    <input
                      className="general-input"
                      name="subject"
                      type="text"
                      placeholder="subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="grid col-xsm-12 col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="your message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row justify-center">
                <div className="grid">
                  <button className="btn" type="submit">
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
