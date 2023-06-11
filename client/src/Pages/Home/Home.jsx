import React from "react";
import Mainsection from "./Main_Page_1";
import Footer from "../../React Components/Footer/Footer"
// import Contact from "../React Components/Contact/Contact";
// import Sign from "../React Components/SignForm/Sign";
// import Testimonial from "../React Components/Testimonials/Testimonial";

function Home() {
  return (
    <div id="/">
      <Mainsection />
      {/* <Contact /> */}
      {/* <Sign /> */}
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default Home;
