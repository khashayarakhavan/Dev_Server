import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from "styled-components";
import ErrorBoundary from './components/atomic/error-boundary/error-boundary.component';
// import Header from './components/Sections/header/header.component';
// import HeroHeader from './components/complex/hero-header/heroHeader.component';
// import HeroHeader from './components/complex/hero-header/heroHeader.component';
// import SectionFeatures from './components/Static/sectionFeatures';
// import UpButton from './components/atomic/up-button/up-button.component';
// import MenuNavigation from './components/atomic/menu-navigation/menu-navigation.component';
import Spinner from './components/spinner/spinner.component';
// import SetTimeOut from './pages/setTimeOut/setTimeOut.component';
// import FirebasePage from "./pages/firebaseDBupload/firebaseDB.components";
// import SingleArticlePage from './pages/singleArticle/singleArticle.component';
import { selectDarkMode } from "./redux/themes/themes.selectors";
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import GlobalStyle from './design/global.styles';
import GlobalConstants from './design/constants.styles';
//Test Page
import TestPage from './pages/testPage/testPage.page';
// import EmailMePage from './pages/emailMe/emailMe.page';
// import HiPalPage from './pages/hiPal/hiPal.page';

import {
  invertTheme, noChange,

  ThemeLight
} from "./design/themes";
// import { ViewportProvider } from './design/viewPort';
import LogRocket from "logrocket";

LogRocket.init("rwd1ni/vegeloper");
// const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
// const LandingPage = lazy(() => import('./pages/landingpage/landingpage.component'));
const Vegeloper = lazy(() => import('./pages/vegeloperPage/vegeloper.page'));
// const ShopPage = lazy(() => import('./pages/shop/shop.component'));
// const SignInAndSignUpPage = lazy(() =>
//   import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
// );

// * checking different combinations of comments;
// ? another comment 
/*
? how is everything?
! are you okey!
TODO never follow it
* This still is logging



*/
// const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser, darkMode }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

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
    <>
      <ThemeProvider theme={ThemeLight}>
        <ThemeProvider theme={darkMode ? invertTheme : noChange}>
          <div>
            <GlobalConstants />
            <GlobalStyle darkMode />
            {/* <ThemeProvider theme={noChange}> */}
            {/* <Header darkMode /> */}
            {/* </ThemeProvider> */}
            {/* <UpButton /> */}
            {/* <SectionFeatures /> */}
            {/* <HeroHeader />  */}
            {/* <MenuNavigation /> */}
            <Switch>
              <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                  <Route exact path="/test" component={TestPage} />
                  <Route exact path="/" component={Vegeloper} />
                  <Route exact path="/vegeloper" component={Vegeloper} />
                  {/* 
                  <Route path="/articles/:slug" component={SingleArticlePage} />
                  <Route exact path="/hello" component={HomePage} />
                  <Route exact path="/landing" component={LandingPage} />
                  
                  <Route exact path="/test" component={TestPage} />
                  <Route exact path="/email" component={EmailMePage} />
                  <Route exact path="/hiPal" component={HiPalPage} />
                  <Route path="/shop" component={ShopPage} />
                  <Route path="/jquery" component={SetTimeOut} />
                  <Route exact path="/checkout" component={CheckoutPage} />
                  <Route
                    exact
                    path="/firebaseDBUpload"
                    component={FirebasePage}
                  />
                  <Route
                    exact
                    path="/signin"
                    render={() =>
                      currentUser ? (
                        <Redirect to="/" />
                      ) : (
                        <SignInAndSignUpPage />
                      )
                    }
                  /> */}
                </Suspense>
              </ErrorBoundary>
            </Switch>
          </div>
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  darkMode: selectDarkMode,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch an action object which takes the user an returns an object with user inside its payload.
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
