import Image from "next/image";
import Shape3 from "/public/assets/images/shape-img/03.png";
import Shape4 from "/public/assets/images/shape-img/04.png";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="news-footer-wrap">
      <div className="fs-shape">
        {/* <Image src="assets/images/shape-img/03.png" alt="fst" className="fst-1" width={22} height={24}/> */}
        <Image src={Shape3} alt="des" className="fst-1" />
        <Image src={Shape4} alt="fst" className="fst-2" />
        {/* <Image src="assets/images/shape-img/04.png" alt="fst" className="fst-2" /> */}
      </div>
      <div className="news-letter">
        <div className="container">
          <div className="section-wrapper">
            <div className="news-title">
              <h3>Want Us To Email You About Special Offers And Updates?</h3>
            </div>
            <div className="news-form">
              <form action="/">
                <div className="nf-list">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <input type="submit" name="submit" value="Subscribe Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-top padding-tb pt-0">
          <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>Site Map</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          <li>
                            <a href="#">Documentation</a>
                          </li>
                          <li>
                            <a href="#">Feedback</a>
                          </li>
                          <li>
                            <a href="#">Plugins</a>
                          </li>
                          <li>
                            <a href="#">Support Forums</a>
                          </li>
                          <li>
                            <a href="#">Themes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>Useful Links</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Help Link</a>
                          </li>
                          <li>
                            <a href="#">Terms &amp; Conditions</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>Social Contact</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          <li>
                            <a href="#">Facebook</a>
                          </li>
                          <li>
                            <a href="#">Twitter</a>
                          </li>
                          <li>
                            <a href="#">Instagram</a>
                          </li>
                          <li>
                            <a href="#">YouTube</a>
                          </li>
                          <li>
                            <a href="#">Github</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>Our Support</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          <li>
                            <a href="#">Help Center</a>
                          </li>
                          <li>
                            <a href="#">Paid with Mollie</a>
                          </li>
                          <li>
                            <a href="#">Status</a>
                          </li>
                          <li>
                            <a href="#">Changelog</a>
                          </li>
                          <li>
                            <a href="#">Contact Support</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="section-wrapper">
              <p>
                © 2022 <Link href="/">Edukon</Link> Designed by CodexCoder
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
