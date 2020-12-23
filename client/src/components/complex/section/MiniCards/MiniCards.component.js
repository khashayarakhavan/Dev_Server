import React, { Component } from 'react';
import {MiniCardsContainer, FlexContainer, MiniCardContainer, MiniCard} from './MiniCards.styles'

class Template extends Component {
    render() {

        return (
          <MiniCardsContainer>
            <FlexContainer>
              <MiniCardContainer>
                <MiniCard>
                  <i className=" icon-basic-world"></i>
                  <h3 className="heading-tertiary">Front-End Development</h3>
                  <span />
                  <p className="feature-box__text">
                    is the most supported Framework worldwide. I cannot imagine
                    a 2021 project without React.
                  </p>
                </MiniCard>
              </MiniCardContainer>

              <MiniCardContainer>
                <MiniCard>
                  <i className="feature-box__icon icon-basic-map"></i>
                  <h3 className="heading-tertiary ">
                    Explore the world
                  </h3>
                  <span />
                  <p className="feature-box__text">
                    shaja baja much loven disch very guten disch shaja baja much
                    loven disch very guten disch
                  </p>
                </MiniCard>
              </MiniCardContainer>

              <MiniCardContainer>
                <MiniCard>
                  <i className="feature-box__icon icon-basic-heart"></i>
                  <h3 className="heading-tertiary ">
                    Explore the world
                  </h3>
                  <span />
                  <p className="feature-box__text">
                    shaja baja much loven disch very guten disch shaja baja much
                    loven disch very guten disch
                  </p>
                </MiniCard>
              </MiniCardContainer>

              <MiniCardContainer>
                <MiniCard>
                  <i className="feature-box__icon icon-basic-compass"></i>
                  <h3 className="heading-tertiary ">
                    Explore the world
                  </h3>
                  <span />
                  <p className="feature-box__text">
                    shaja baja much loven disch very guten disch shaja baja much
                    loven disch very guten disch
                  </p>
                </MiniCard>
              </MiniCardContainer>
            </FlexContainer>
          </MiniCardsContainer>
        );
    }
}

export default (Template);