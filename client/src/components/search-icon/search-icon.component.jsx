import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  SearchContainer,
  StarIcon
} from './search-icon.styles';
import "./search-icon.styles.scss";

export const SearchBox = ({ toggleCartHidden, itemCount }) => (
         <SearchContainer>
           {/* -- Style 1 to import SVG: direct SVG file & edit partly using Sass -- */}
           {/* <CrownIcon id="nanai-icon" className="nanai-icon" onClick={toggleCartHidden} /> */}

           {/* -- Style 2 to import SVG: SVG file inside StyledComponents -- */}
           <StarIcon className="star" />

           {/* -- Style 3 to import SVG: using Sprite bundle + StyledComponents "Recommended Method" -- */}
           {/* <SVG onClick={toggleCartHidden}>
             <use href={sprite + "#icon-trophy"} />
           </SVG> */}
         </SearchContainer>
       );

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
