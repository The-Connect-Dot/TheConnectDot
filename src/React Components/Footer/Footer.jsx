import React from "react";
import s from "./style.module.css";

function Footer() {
  return (
    <footer class={s.siteFooter}>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
            The Connect Dot Corp. is a company dedicated to guiding and mentoring students in their transition from college to the corporate world. Our mission is to help students connect their future aspirations with practical plans, ensuring a smooth and successful journey into their chosen careers. We understand the challenges students face when making important decisions about their future, such as choosing postgraduate degrees, research opportunities, MS programs, or preparing for competitive exams.
            </p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Programmes</h6>
            <ul class={s.footerLinks}>
              <li>
                <a href="/">A</a>
              </li>
              <li>
                <a href="/">B</a>
              </li>
              <li>
                <a href="/">C</a>
              </li>
              <li>
                <a href="/">D</a>
              </li>
              <li>
                <a href="/">E</a>
              </li>
              <li>
                <a href="/">F</a>
              </li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class={s.footerLinks}>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Contribute</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a
                  dir="_blank"
                  href="https://www.google.com/maps/place/National+Institute+of+Technology,+Hamirpur/@31.7084336,76.5224817,17z/data=!3m1!4b1!4m6!3m5!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526!16zL20vMGNybnJ4?entry=ttu"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class={s.copyrightText}>
              Copyright &copy; 2023 All Rights Reserved by
              <a href="/"> The Connect Dot Corp.</a>.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class={s.socialIcons}>
              <li>
                <a class={`${s.facebook} ${s.footerLogo}`} href="/">
                  <img
                    className={s.logos}
                    src="./Media logos/linkedin.png"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
              <li>
                <a class={`${s.twitter} ${s.footerLogo}`} href="/">
                  <img
                    className={s.logos}
                    src="./Media logos/twitter.png"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
              <li>
                <a class={`${s.dribbble} ${s.footerLogo}`} href="/">
                  <img
                    className={s.logos}
                    src="./Media logos/youtube.png"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
              <li>
                <a class={`${s.linkedin} ${s.footerLogo}`} href="/">
                  <img
                    className={s.logos}
                    src="./Media logos/instagram.png"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
