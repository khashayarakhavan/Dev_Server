//Basics
import React from 'react';
//State
import { connect } from 'react-redux';
//Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectDarkMode } from "../../../redux/themes/themes.selectors";
import { selectCurrentUser } from '../../../redux/user/user.selectors';
//Actions
import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { toggleDarkMode } from "../../../redux/themes/themes.actions";
import { signOutStart } from "../../../redux/user/user.actions";
//Components
import CartDropdown from '../../complex/cart-dropdown/cart-dropdown.component';
//Assets
import meSVG from '../../../assets/SVG/me.svg'
import meDev from '../../../assets/SVG/me-dev.svg'
//Design
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
import {
  InheritedBody,
  WhatIDo,
  SkillsContainer,
  Row,
  ColMd12,
  Article,
  DesignRow,
  ColMd4,
  HomeDesign,
  Figure,
  BubbleRight,
  DesignIconVert,
  Image,
  ColMd6,
  ColMd7,
  Deets,
  Develop,
  MdPush7,
  Image2,
  HomeDev,
  BubbleLeft,
  DevIconVert,
  ColMd6_Pull3,
  BubbleButton,
} from "./skills.styles";


//Code
export const Header = (props) => {
  const { hidden } = props;

  return (
    
      <SkillsContainer>
        <Row>
          <ColMd12>
            <Article>
              <header class="">
                <h2>I help people ...</h2>
              </header>

              <DesignRow>
                <ColMd6>
                  <BubbleButton>
                    <BubbleRight>
                      <DesignIconVert />
                    </BubbleRight>
                  </BubbleButton>
                  <Deets>
                    <h3>Create blazing fast websites.</h3>
                    <p>
                      My ultimate goal is to perfectly match your real needs to
                      the best solutions available. So I always make sure to
                      follow the tech community's best practices.
                    </p>
                  </Deets>
                </ColMd6>
                <ColMd6>
                  <Deets>
                    <h3>Create blazing fast websites.</h3>
                    <p>
                      My ultimate goal is to perfectly match your real needs to
                      the best solutions available. So I always make sure to
                      follow the tech community's best practices.
                    </p>
                  </Deets>
                  <BubbleButton>
                    <BubbleRight>
                      <DevIconVert />
                    </BubbleRight>
                  </BubbleButton>
                </ColMd6>
                {/* <ColMd6>
                  <BubbleButton>
                    <BubbleRight>
                      <DesignIconVert />
                    </BubbleRight>
                  </BubbleButton>
                  <Deets>
                    <h3>Create blazing fast websites.</h3>
                    <p>
                      My ultimate goal is to perfectly match your real needs to
                      the best solutions available. So I always make sure to
                      follow the tech community's best practices.
                    </p>
                  </Deets>
                </ColMd6> */}
              </DesignRow>
              {/* <!-- /row --> */}
              
              {/* <!-- /row --> */}
            </Article>
          </ColMd12>
        </Row>
      </SkillsContainer>
    
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  darkMode: selectDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);



// <Develop>
//   <MdPush7>
//     <HomeDev>
//       <Figure>
//         <Image2 src={meDev} />
//       </Figure>

//       {/* <BubbleLeft>
//                       <DevIconVert />
//                     </BubbleLeft> */}
//     </HomeDev>
//   </MdPush7>
//   {/* <!-- col --> */}
//   <ColMd6_Pull3>
//     <Deets>
//       <h3>inifinitely scale your website</h3>
//       <p>
//         I tend to code in the cloud to make sure your website can infinitely
//         scale as your business grows.
//       </p>
//     </Deets>
//   </ColMd6_Pull3>
//   {/* <!-- col --> */}
// </Develop>;