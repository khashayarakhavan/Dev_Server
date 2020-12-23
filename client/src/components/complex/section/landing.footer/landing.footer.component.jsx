import { CloudinaryContext, Image } from "cloudinary-react";
import React from "react";

const Template = () => {
  return (
    <footer className="footer">
      <CloudinaryContext cloudName="demo">
        <div>
          <Image publicId="samples/imagecon-group" width="50" crop="scale" />
        </div>
        <Image
          publicId="samples/sheep.webp"
          width="0.5"
          crop="scale"
        />
      </CloudinaryContext>
      <ul className="nav">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find your dream home 1
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find your dream home 2
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find your dream home 3
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find your dream home 4
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find your dream home 5
          </a>
        </li>
      </ul>
      ><p className="copyright">&copy; Copyright 2020 by aftoflBig5</p>
    </footer>
  );
};

export default Template;
