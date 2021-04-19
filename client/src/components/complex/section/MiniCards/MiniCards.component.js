import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {MiniCardsContainer, FlexContainer, MiniCardContainer, MiniCard, MiniCard2, MiniCard_Square} from './MiniCards.styles'
import TabbedCardNeumorphic from '../../../../interactions/TabbedCardNeumorphic/tabbedCardNeumorphic.component';
class Template extends Component {
    render() {

        return (
          <MiniCardsContainer>
            <FlexContainer>
              {/* <MiniCardContainer>
                <TabbedCardNeumorphic />
              </MiniCardContainer> */}

              <MiniCardContainer>
                <MiniCard>
                  <i className="feature-box__icon icon-basic-map"></i>
                  <h3 className="heading-tertiary ">
                    How styled-components saved my React project
                  </h3>
                  <span />
                  <p className="feature-box__text">
                    A starter's guide on using styles in JS
                  </p>
                  <Link to="/articles" className="link-read-more">
                    Read more
                  </Link>
                </MiniCard>
              </MiniCardContainer>

              <MiniCardContainer>
                <MiniCard2>
                  <i className="feature-box__icon icon-basic-heart"></i>
                  <h3 className="heading-tertiary ">Top React Libraries</h3>
                  <span />
                  <p className="feature-box__text">Explore infinite options</p>
                  <Link to="/articles" className="link-read-more">
                    Read more
                  </Link>
                </MiniCard2>
              </MiniCardContainer>

              

              {/* <MiniCardContainer>
                <MiniCard>
                  <i className="feature-box__icon icon-basic-compass"></i>
                  <h3 className="heading-tertiary ">Explore the world</h3>
                  <span />
                  <p className="feature-box__text">
                    shaja baja much loven disch very guten disch shaja baja much
                    loven disch very guten disch
                  </p>
                </MiniCard>
              </MiniCardContainer> */}
            </FlexContainer>
          </MiniCardsContainer>
        );
    }
}

export default (Template);