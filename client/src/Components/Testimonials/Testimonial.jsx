import React, { useEffect } from "react";
import "./Testimonial.css";
// import {Swiper} from "swiper";

export default () => {
  useEffect(() => {
    
  }, []);
  return (
    <div className="container">
      <div className="swiper swiperCarousel">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="card">
              <img className="avatar" src="https://i.pravatar.cc/200?img=26" />
              <svg
                className="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="125px"
                height="125px"
              >
                <path d="M 16.482422 8.9921875 A 1.50015 1.50015 0 0 0 15.943359 9.1074219 C 15.943359 9.1074219 13.068414 10.279429 10.357422 13.464844 C 7.6464301 16.650259 5 21.927419 5 30 A 1.50015 1.50015 0 0 0 5.015625 30.21875 A 8.5 8.5 0 0 0 13.5 39 A 8.5 8.5 0 0 0 13.5 22 A 8.5 8.5 0 0 0 8.7089844 23.480469 C 9.5777265 19.777157 11.122152 17.196657 12.642578 15.410156 C 14.931586 12.720571 17.056641 11.892578 17.056641 11.892578 A 1.50015 1.50015 0 0 0 16.482422 8.9921875 z M 37.482422 8.9921875 A 1.50015 1.50015 0 0 0 36.943359 9.1074219 C 36.943359 9.1074219 34.068414 10.279429 31.357422 13.464844 C 28.64643 16.650259 26 21.927419 26 30 A 1.50015 1.50015 0 0 0 26.015625 30.21875 A 8.5 8.5 0 0 0 34.5 39 A 8.5 8.5 0 0 0 34.5 22 A 8.5 8.5 0 0 0 29.708984 23.480469 C 30.577727 19.777157 32.122152 17.196657 33.642578 15.410156 C 35.931586 12.720571 38.056641 11.892578 38.056641 11.892578 A 1.50015 1.50015 0 0 0 37.482422 8.9921875 z" />
              </svg>
              <div className="header">
                <h1 className="name">Amy Liu</h1>
                <h2 className="title">CTO, Cybertech Solutions</h2>
              </div>
              <div className="quote-container">
                <p className="quote">
                  I must admit, as a software developer, I was skeptical about
                  the MindSync Neural Interface. But once I saw how it could
                  transform not just the way I work but also how I engage with
                  the world, I was sold. Its integration capability and
                  responsiveness are unlike anything I've seen before. We're not
                  just talking about a step forward in technology, but a quantum
                  leap into the future.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <img className="avatar" src="https://i.pravatar.cc/200?img=26" />
              <svg
                className="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="125px"
                height="125px"
              >
                <path d="M 16.482422 8.9921875 A 1.50015 1.50015 0 0 0 15.943359 9.1074219 C 15.943359 9.1074219 13.068414 10.279429 10.357422 13.464844 C 7.6464301 16.650259 5 21.927419 5 30 A 1.50015 1.50015 0 0 0 5.015625 30.21875 A 8.5 8.5 0 0 0 13.5 39 A 8.5 8.5 0 0 0 13.5 22 A 8.5 8.5 0 0 0 8.7089844 23.480469 C 9.5777265 19.777157 11.122152 17.196657 12.642578 15.410156 C 14.931586 12.720571 17.056641 11.892578 17.056641 11.892578 A 1.50015 1.50015 0 0 0 16.482422 8.9921875 z M 37.482422 8.9921875 A 1.50015 1.50015 0 0 0 36.943359 9.1074219 C 36.943359 9.1074219 34.068414 10.279429 31.357422 13.464844 C 28.64643 16.650259 26 21.927419 26 30 A 1.50015 1.50015 0 0 0 26.015625 30.21875 A 8.5 8.5 0 0 0 34.5 39 A 8.5 8.5 0 0 0 34.5 22 A 8.5 8.5 0 0 0 29.708984 23.480469 C 30.577727 19.777157 32.122152 17.196657 33.642578 15.410156 C 35.931586 12.720571 38.056641 11.892578 38.056641 11.892578 A 1.50015 1.50015 0 0 0 37.482422 8.9921875 z" />
              </svg>
              <div className="header">
                <h1 className="name">Sarah Price</h1>
                <h2 className="title">Sr. Technology Analyst</h2>
              </div>
              <div className="quote-container">
                <p className="quote">
                  The MindSync Neural Interface is a game-changer in technology
                  that's redefining the way we interact with digital devices.
                  With the seamless and intuitive connection, it has reduced the
                  cognitive load of my everyday tasks. As a busy professional, I
                  no longer have to divide my attention across multiple devices.
                  This revolutionary product has managed to marry convenience
                  and functionality in a way I had never thought possible.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <img className="avatar" src="https://i.pravatar.cc/200?img=69" />
              <svg
                className="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="125px"
                height="125px"
              >
                <path d="M 16.482422 8.9921875 A 1.50015 1.50015 0 0 0 15.943359 9.1074219 C 15.943359 9.1074219 13.068414 10.279429 10.357422 13.464844 C 7.6464301 16.650259 5 21.927419 5 30 A 1.50015 1.50015 0 0 0 5.015625 30.21875 A 8.5 8.5 0 0 0 13.5 39 A 8.5 8.5 0 0 0 13.5 22 A 8.5 8.5 0 0 0 8.7089844 23.480469 C 9.5777265 19.777157 11.122152 17.196657 12.642578 15.410156 C 14.931586 12.720571 17.056641 11.892578 17.056641 11.892578 A 1.50015 1.50015 0 0 0 16.482422 8.9921875 z M 37.482422 8.9921875 A 1.50015 1.50015 0 0 0 36.943359 9.1074219 C 36.943359 9.1074219 34.068414 10.279429 31.357422 13.464844 C 28.64643 16.650259 26 21.927419 26 30 A 1.50015 1.50015 0 0 0 26.015625 30.21875 A 8.5 8.5 0 0 0 34.5 39 A 8.5 8.5 0 0 0 34.5 22 A 8.5 8.5 0 0 0 29.708984 23.480469 C 30.577727 19.777157 32.122152 17.196657 33.642578 15.410156 C 35.931586 12.720571 38.056641 11.892578 38.056641 11.892578 A 1.50015 1.50015 0 0 0 37.482422 8.9921875 z" />
              </svg>
              <div className="header">
                <h1 className="name">Dr. Miguel Torres</h1>
                <h2 className="title">Head of Neurobiology, Central University</h2>
              </div>
              <div className="quote-container">
                <p className="quote">
                  The day I started using the MindSync Neural Interface, I
                  understood it wasn't just an ordinary gadget, but an
                  extraordinary leap in technological innovation. Its
                  user-friendly nature, mixed with the uncanny ability to
                  understand and process my thoughts, is genuinely
                  awe-inspiring. It's as if it took the immense complexity of
                  the human brain and made it accessible, all without
                  compromising my privacy or security.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <img className="avatar" src="https://i.pravatar.cc/200?img=59" />
              <svg
                className="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="125px"
                height="125px"
              >
                <path d="M 16.482422 8.9921875 A 1.50015 1.50015 0 0 0 15.943359 9.1074219 C 15.943359 9.1074219 13.068414 10.279429 10.357422 13.464844 C 7.6464301 16.650259 5 21.927419 5 30 A 1.50015 1.50015 0 0 0 5.015625 30.21875 A 8.5 8.5 0 0 0 13.5 39 A 8.5 8.5 0 0 0 13.5 22 A 8.5 8.5 0 0 0 8.7089844 23.480469 C 9.5777265 19.777157 11.122152 17.196657 12.642578 15.410156 C 14.931586 12.720571 17.056641 11.892578 17.056641 11.892578 A 1.50015 1.50015 0 0 0 16.482422 8.9921875 z M 37.482422 8.9921875 A 1.50015 1.50015 0 0 0 36.943359 9.1074219 C 36.943359 9.1074219 34.068414 10.279429 31.357422 13.464844 C 28.64643 16.650259 26 21.927419 26 30 A 1.50015 1.50015 0 0 0 26.015625 30.21875 A 8.5 8.5 0 0 0 34.5 39 A 8.5 8.5 0 0 0 34.5 22 A 8.5 8.5 0 0 0 29.708984 23.480469 C 30.577727 19.777157 32.122152 17.196657 33.642578 15.410156 C 35.931586 12.720571 38.056641 11.892578 38.056641 11.892578 A 1.50015 1.50015 0 0 0 37.482422 8.9921875 z" />
              </svg>
              <div className="header">
                <h1 className="name">Benjamin Moore</h1>
                <h2 className="title">Director of HCI, FutureTech</h2>
              </div>
              <div className="quote-container">
                <p className="quote">
                  The MindSync Neural Interface isn't just an upgrade, it's an
                  evolution. The way it syncs effortlessly with my thought
                  processes makes it feel like a natural extension of my mind.
                  It's empowering and liberating to interact with my digital
                  world in such a direct, fluid manner. This is a tool that
                  makes technology feel less like a barrier and more like an
                  ally.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <img className="avatar" src="https://i.pravatar.cc/200?img=49" />
              <svg
                className="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="125px"
                height="125px"
              >
                <path d="M 16.482422 8.9921875 A 1.50015 1.50015 0 0 0 15.943359 9.1074219 C 15.943359 9.1074219 13.068414 10.279429 10.357422 13.464844 C 7.6464301 16.650259 5 21.927419 5 30 A 1.50015 1.50015 0 0 0 5.015625 30.21875 A 8.5 8.5 0 0 0 13.5 39 A 8.5 8.5 0 0 0 13.5 22 A 8.5 8.5 0 0 0 8.7089844 23.480469 C 9.5777265 19.777157 11.122152 17.196657 12.642578 15.410156 C 14.931586 12.720571 17.056641 11.892578 17.056641 11.892578 A 1.50015 1.50015 0 0 0 16.482422 8.9921875 z M 37.482422 8.9921875 A 1.50015 1.50015 0 0 0 36.943359 9.1074219 C 36.943359 9.1074219 34.068414 10.279429 31.357422 13.464844 C 28.64643 16.650259 26 21.927419 26 30 A 1.50015 1.50015 0 0 0 26.015625 30.21875 A 8.5 8.5 0 0 0 34.5 39 A 8.5 8.5 0 0 0 34.5 22 A 8.5 8.5 0 0 0 29.708984 23.480469 C 30.577727 19.777157 32.122152 17.196657 33.642578 15.410156 C 35.931586 12.720571 38.056641 11.892578 38.056641 11.892578 A 1.50015 1.50015 0 0 0 37.482422 8.9921875 z" />
              </svg>
              <div className="header">
                <h1 className="name">Dr. Simone Laurent</h1>
                <h2 className="title">Chief Neurologist, NeuroTech Hospital</h2>
              </div>
              <div className="quote-container">
                <p className="quote">
                  As a neurologist, I can attest that the MindSync Neural
                  Interface is an absolute marvel. The accuracy with which it
                  translates neural signals into digital actions is astounding.
                  But what impresses me more is how it manages to do so with
                  such finesse, ensuring an unintrusive and seamless user
                  experience. This is truly a leap in making technology more
                  intuitively human.
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <img className="avatar" src="https://i.pravatar.cc/200?img=68" />
              <svg
                className="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="125px"
                height="125px"
              >
                <path d="M 16.482422 8.9921875 A 1.50015 1.50015 0 0 0 15.943359 9.1074219 C 15.943359 9.1074219 13.068414 10.279429 10.357422 13.464844 C 7.6464301 16.650259 5 21.927419 5 30 A 1.50015 1.50015 0 0 0 5.015625 30.21875 A 8.5 8.5 0 0 0 13.5 39 A 8.5 8.5 0 0 0 13.5 22 A 8.5 8.5 0 0 0 8.7089844 23.480469 C 9.5777265 19.777157 11.122152 17.196657 12.642578 15.410156 C 14.931586 12.720571 17.056641 11.892578 17.056641 11.892578 A 1.50015 1.50015 0 0 0 16.482422 8.9921875 z M 37.482422 8.9921875 A 1.50015 1.50015 0 0 0 36.943359 9.1074219 C 36.943359 9.1074219 34.068414 10.279429 31.357422 13.464844 C 28.64643 16.650259 26 21.927419 26 30 A 1.50015 1.50015 0 0 0 26.015625 30.21875 A 8.5 8.5 0 0 0 34.5 39 A 8.5 8.5 0 0 0 34.5 22 A 8.5 8.5 0 0 0 29.708984 23.480469 C 30.577727 19.777157 32.122152 17.196657 33.642578 15.410156 C 35.931586 12.720571 38.056641 11.892578 38.056641 11.892578 A 1.50015 1.50015 0 0 0 37.482422 8.9921875 z" />
              </svg>
              <div className="header">
                <h1 className="name">Jared Foster</h1>
                <h2 className="title">Sr. Tech Journalist, Digital Frontier</h2>
              </div>
              <div className="quote-container">
                <p className="quote">
                  As a technology journalist, I've seen numerous gadgets come
                  and go. However, the MindSync Neural Interface isn't just a
                  flash in the pan - it's here to revolutionize the way we
                  perceive and interact with technology. The convenience it
                  brings, coupled with its stellar performance, makes it more
                  than just a device - it's an experience. One that is utterly
                  transformative in the truest sense of the word.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};
