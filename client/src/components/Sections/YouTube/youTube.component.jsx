//Basics
import React from 'react';
//State

//Selectors

//Actions

//Components

//Design

import {
  SectionYoutube,
  YouTubeContainer,
  YTContainer,
  YT,
} from "./youTube.styles";
export const YouTube = (props) => {


  return (
    <SectionYoutube>
      <YTContainer>
        <YT>
          <iframe
            id="ytplayer"
            className="player"
            type="text/html"
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/gO6wh3-AOD4"}
            frameborder="0"
            allowfullscreen
          />
        </YT>
      </YTContainer>
    </SectionYoutube>
  );
};


// var YouTube = React.createClass({
//   render: function () {
//     var videoSrc =
//       "https://www.youtube.com/embed/" +
//       this.props.video +
//       "?autoplay=" +
//       this.props.autoplay +
//       "&rel=" +
//       this.props.rel +
//       "&modestbranding=" +
//       this.props.modest;

//     return (
//       <YouTubeContainer>
//         <iframe
//           id="ytplayer"
//           className="player"
//           type="text/html"
//           width="100%"
//           height="100%"
//           src={"https://www.youtube.com/embed/gO6wh3-AOD4"}
//           frameborder="0"
//           allowfullscreen
//         />
//       </YouTubeContainer>
//     );
//   },
// });
// export default YouTube;
{/* <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" /> */}

{/* <iframe id="ytplayer" type="text/html" width="720" height="405"
src="https://www.youtube.com/embed/M7lc1UVf-VE"
frameborder="0" allowfullscreen></iframe> */}

// React.render(
//   <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" />,
//   document.body
// );

// //Code
// export const Header = (props) => {
//   const { hidden } = props;

//   return (
//     <HigherContainer>
    
//     </HigherContainer>
//   );
// };

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden,
//   darkMode: selectDarkMode,
// });

// const mapDispatchToProps = (dispatch) => ({
//   signOutStart: () => dispatch(signOutStart()),
//   toggleDarkMode: () => dispatch(toggleDarkMode()),
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);
