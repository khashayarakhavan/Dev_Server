import React from 'react';
import $ from 'jquery';
import Hero from "../../components/atomic/hero/hero.component";
import SideNav from "../../components/atomic/side-nav/side-nav.component";
import { LandingPageContainer } from "./setTimeOut.styles";
import { findDOMNode } from 'react-dom';




class SetTimeOut extends React.Component {
 constructor() {
 super();
 }

handleToggle = () => {
 const el = findDOMNode(this.refs.toggle);
 $(el).slideToggle();
 };
render() {
 return (
 <div >
  <ul >
   <li>
     <span >thanks to </span> AftoflBig5
   </li>
 </ul>
<ul ref='toggle'>
  <li>
    <span >Believe it or not </span> I will disapper
  </li>
 </ul>
  <button  onClick={this.handleToggle}>
    Click ME!!!
  </button>
 </div>
 );
 }
}
export default SetTimeOut;
// const setTimeOut = () => 
//   // const handleToggle = () => {
//   //   const el = findDOMNode(this.refs.helloWorld);
//   //   $(el).slideToggle();
//   // }

//    (

//   <LandingPageContainer>
//     {/* <SideNav /> */}
//     {/* <Hero /> */}
    
//     <div className="story__content">
//       <p ref="helloWorld" style={{fontSize: 35}}>Hello World !</p>
//     </div>
//     {/* <button onClick={handleToggle}>HideBanner</button> */}
// //   </LandingPageContainer>
// // );
// const setTimeOut = () => (
//   <LandingPageContainer>
//     <p ref="helloWorld" style={{ fontSize: 35 }}>
//       Hello World !
//     </p>
//   </LandingPageContainer>
// );

// export default setTimeOut;
