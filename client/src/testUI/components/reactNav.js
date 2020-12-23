import React, {useState} from "react";

import styled, {css} from "styled-components";

import {FrameWrapper, Frame} from '../../shared';

import {rgba} from "polished";

const Phone = styled.div`
    position: relative;
    overflow: hidden;
    width: 240px;
    height: 480px;
    border-radius: 40px;
    background: #5a32a0;
`;

const openStyles = css`
    transform: translateX(110px)
    scale(0.85);
`;

const Content = styled.div`
    height: 800px;
    padding: 2rem 1.5rem;
    border-radius: 40px;
    background: #210f40;
    transform: translateX(0)
    scale(1);
    transition: 0.45s
    ${(p) => p.open && openStyles};
`;

const Burger = styled.button`
    background: transparent;
    border: 0;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const Nav= styled.nav`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

const NavButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 44px;
    background: transparent;
    color: ${rgba("white", 0.5)};
`;

const NavIcon = styled.span`
    font-size: 1.25rem;
`;

const NavText = styled.span`
    font-size: 0.875rem;
`;

const ModernNav = () => {
    const [open, setOpen] = useState(false);
    return (
    //   <FrameWrapper>
    //     <Frame>
          <Phone>
            <Nav>
              <NavButton>
                <NavIcon className="uil uil-home" />
              </NavButton>
              <NavText>Home</NavText>
            </Nav>
            <Content open={open}>
              <Burger onClick={() => setOpen(!open)} className="uil uil-bars" />
            </Content>
          </Phone>
    //     </Frame>
    //   </FrameWrapper>
    );
};

export default ModernNav;

