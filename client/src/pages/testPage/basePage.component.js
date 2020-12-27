//Framework
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//State Selector
// import { selectCurrentUser } from "./redux/user/user.selectors";
import {
  selectMenuOpen,
  selectRichText,
} from "../../redux/vegeloperPage/vegeloperPage.selectors";
//Actions
// import { checkUserSession } from "./redux/user/user.actions";
import {
  toggleMenuOpen,
  emailRichText,
} from "../../redux/vegeloperPage/vegeloperPage.actions";
//Libraries
import styled, { css } from "styled-components";
import { rgba } from "polished";
//Styles
import {Content, Nav, Phone, Burger, NavButton, NavIcon, NavText} from './basePage.styles';
//Interactions
import SlideUpDialog from '../../interactions/SlideUp/slideUp.component';
import LazyCard from '../../interactions/LazyCard/lazyCard.component';
import TabbedCard from '../../interactions/TabbedCard/tabbedCard.component';
import ToolTip from '../../interactions/ToolTip/toolTip.component';
import RichTextCard from '../../interactions/richTextCard/richTextCard.component';
import CountryPicker from '../../interactions/CountryPicker/countryPicker.component';
import Skeleton from '../../interactions/Skeleton/skeletonScreen.component';



const BasePage = ({ menuOpen, toggleMenuOpen, richText, emailRichText }) => {

  useEffect(() => {
    if (richText) {
      console.log(`@FROM TESTPAGE!!! this is rich text: `, richText.blocks[0].text);
    }
  }, [richText]);

  const [open, setOpen] = useState(false);
  
  const handleClick = async () => {
    console.log("Hello from handleclick");
    var myDataObj = richText;
    var formData = new FormData();

    for (var key in myDataObj) {
      formData.append(key, myDataObj[key]);
    }

    // try {
    //   const res = await axios.post("/api/v1/email", formData);
    //   console.log(res.data);
    // } catch (err) {
    //   console.log('error is : ',err);
    // }

    
try {
  const response = await axios.post("/api/v1/email", {
    posted_data: formData,
    my_text: richText,
  });
  console.log("👉 Returned data:", response);
} catch (e) {
  console.log(`😱 Axios request failed: ${e}`);
}

    // axios
    //   .post("/api/v1/email", formData, {
    //     params: { action: "update-user" },
    //     headers: { "Content-Type": "multipart/form-data" },
    //     // baseURL: "http://localhost:5000",
    //   })
    //   .then((data) => console.log(data))
    //   .catch((err) => {
    //     console.log(err);
    //     return null;
    //   });
    // const res = await axios.post("/api/v1/email", richText);
    // const res = await axios.post("/api/v1/email", {
    //   richText: richText.stringify()
    // });
    // console.log("Hello from handleclick /basePage : ", res.data);
    // const text = res.data.map(fact => fact.text);

    // return res.data;
  };
  const bookBtn = document.getElementById("book-tour");

  if (bookBtn) {
    bookBtn.addEventListener("click", (e) => {
      e.target.textContent = "Processing...";
      /* javascript automatically converts the kebab-cased variables to camelCased variable  */
      /* so here instead of tour-id we use tourId alongwith ES6 destructuring */
      // const { tourId } = e.target.dataset;
      // bookTour(tourId);
    });
  }
  return (
    <Phone>
      <Nav>
        <NavButton>
          <NavIcon className="uil uil-home" />
        </NavButton>
        <NavText>Home</NavText>
      </Nav>
      <Content open={menuOpen}>
        <Burger onClick={toggleMenuOpen} className="uil uil-bars" />
        <LazyCard />
        <button id="book-tour">Click to process</button>
        <TabbedCard />
        <Link to={"/email"} className="emailMe">
          <ToolTip />
        </Link>
        <Link to={"/"} className="homePage">
          <Skeleton />
        </Link>

        <RichTextCard />
        <button onClick={handleClick}>Send Email!</button>
        <CountryPicker />
        {/* <SlideUpDialog /> */}
      </Content>
    </Phone>
  );
};

const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser,
  menuOpen: selectMenuOpen,
  richText: selectRichText,
});

const mapDispatchToProps = (dispatch) => ({
  // checkUserSession: () => dispatch(checkUserSession()),
  toggleMenuOpen: () => dispatch(toggleMenuOpen()),
  emailRichText: (value) => dispatch(emailRichText(value)),
});



export default connect(mapStateToProps, mapDispatchToProps)(BasePage);