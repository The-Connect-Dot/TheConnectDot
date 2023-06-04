import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div id="contact" className={styles.top1}>
      {" "}
      <h1>Contact us</h1>
      <div data-aos="zoom-in" className={styles.container}>
        <div className={styles.form}>
          <div className={styles.contactinfo}>
            <h3 className={styles.title}>Let's get in touch</h3>
            <p className={styles.text}>Company</p>

            <div className={styles.info}>
              <div className={styles.information}>
                <FaEnvelope className={styles.iconre} />
                <p>Email</p>
              </div>
              <div className={styles.information}>
                <FaPhone className={styles.iconre} />
                <p>Phone Number</p>
              </div>
            </div>

            <div className={styles.socialmedia}>
              <p>Connect with Us</p>
              <div className={styles.socialicons}>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contactform}>
            <div className={`${styles.circle} ${styles.one}`}></div>
            <div className={`${styles.circle} ${styles.two}`}></div>

            <form action="#" autocomplete="off">
              <h3 className={styles.title}>Contact Us</h3>
              <div className={styles.inputcontainer}>
                <input type="text" name="name" className={styles.input} />
                <label for="">Name</label>
                <span>Name</span>
              </div>
              <div className={styles.inputcontainer}>
                <input type="email" name="email" className={styles.input} />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className={styles.inputcontainer}>
                <input type="tel" name="phone" className={styles.input} />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div className={`${styles.inputcontainer} ${styles.textarea}`}>
                <textarea name="message" className={styles.input}></textarea>
                <label for="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className={styles.btn} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
