import React from "react";
import "./footer.styles.scss";

// import p1 from "../../res/img/logo-green-2x.png";
import p1 from "../../../assets/img/nat-1-large.jpg";
import p1small from "../../../assets/img/nat-1.jpg";
import p2 from "../../../assets/img/nat-2-large.jpg";
import p2small from "../../../assets/img/nat-2.jpg";
import vegeloperSVG from "assets/SVG/Vegeloper.svg";

const Template = () => {
  return (
    <footer className="section-footer">
      <div className="footer">
        <div className="footer__logo-box">
          {/* Art Direction for footer photo, changing size and resolution density based on media queries. */}
          <img
            className="footer__logo"
            srcSet={`${vegeloperSVG} 1x, ${vegeloperSVG} 2x`}
            alt="Full Logo"
          />
          {/* <picture clanssName="footer__logo">
            <source
              srcSet={`${p2small} 1x, ${p2} 2x`}
              media="(min-width: 1000.5rem)"
            />
            <img
              className="footer__logo"
              srcSet={`${vegeloperSVG} 1x, ${vegeloperSVG} 2x`}
              alt="Full Logo"
            />
          </picture> */}
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Contct us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{" "}
              <a href="#" className="footer__link">
                AftoflBIG5
              </a>{" "}
              for online course.{" "}
              <a href="#" className="footer__link">
                {" "}
                Css and Saas
              </a>{" "}
              . Copyright &copy; by AftoflBIG5
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Template;
