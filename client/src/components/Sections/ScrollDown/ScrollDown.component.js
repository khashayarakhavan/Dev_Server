import React, { Component } from 'react';
import {
  CardsContainer,
  Heading2,
  Arrow,
  ArrowContainer,
  ScrollDownCTA,
} from "./ScrollDown.styles";

class Template extends Component {
    render() {

        return (
          <ScrollDownCTA>
            <ArrowContainer
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={-300}
              duration={1000}
            >
              <Arrow>
                <path
                  stroke-linecap="round"
                  class="a1"
                  d="M0 0 L20 22 L40 0"
                ></path>
              </Arrow>
            </ArrowContainer>
          </ScrollDownCTA>
        );
    }
}

export default (Template);