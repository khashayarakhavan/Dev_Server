import React from 'react';
// import sprite from "../../res/img/sprite.svg";
import sprite from "../../../assets/spriteSVG/sprite-medals.svg";
import {SideBar,SideNav,SideNavItem,ItemLink,Icon,Legal} from './SideBar.styles';

const Template = () => {
    return (
        <SideBar>
            <SideNav>
                <SideNavItem>
                    <ItemLink>
                        <Icon>
                            <use href={sprite + "#icon-home"} />
                        </Icon>
                        <span>Hotel</span>
                    </ItemLink>
                </SideNavItem>
                <SideNavItem>
                    <ItemLink>
                        <Icon>
                            <use href={sprite + "#icon-aircraft-take-off"} />
                        </Icon>
                        <span>Flight</span>
                    </ItemLink>
                </SideNavItem>
                <SideNavItem>
                    <ItemLink>
                        <Icon>
                            <use href={sprite + "#icon-key"} />
                        </Icon>
                        <span>Car Rental</span>
                    </ItemLink>
                </SideNavItem>
                <li className="side-nav__item">
                    <ItemLink>
                        <Icon>
                            <use href={sprite + "#icon-map"} />
                        </Icon>
                        <span>Tours</span>
                    </ItemLink>
                </li>
            </SideNav>
            <Legal>
                &copy; 2020 by AftoflBIG5
            </Legal>   
        </SideBar>
    );
};

export default Template;