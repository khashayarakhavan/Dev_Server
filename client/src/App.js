import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from "styled-components";
import ErrorBoundary from './components/atomic/error-boundary/error-boundary.component';
import RouterSwitch from './Routes/RouterSwitch';

import Spinner from './components/spinner/spinner.component';

import { selectDarkMode } from "./redux/themes/themes.selectors";
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import GlobalStyle from './design/global.styles';
import GlobalConstants from './design/constants.styles';
import {invertTheme, noChange, ThemeLight} from "./design/themes";
import LogRocket from "logrocket";
LogRocket.init("rwd1ni/vegeloper");



const App = ({ checkUserSession, currentUser, darkMode , ...props}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);



  return (
    <>
      <ThemeProvider theme={ThemeLight}>
        <ThemeProvider theme={darkMode ? invertTheme : noChange}>
          <div>
            <GlobalConstants />
            <GlobalStyle darkMode />     

            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <RouterSwitch {...props} />  
              </Suspense>
            </ErrorBoundary>
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);























// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch an action object which takes the user an returns an object with user inside its payload.
// });





       {
         /* <ThemeProvider theme={noChange}> */
       }
       {
         /* <Header darkMode /> */
       }
       {
         /* </ThemeProvider> */
       }
       {
         /* <UpButton /> */
       }
       {
         /* <SectionFeatures /> */
       }
       {
         /* <HeroHeader />  */
       }
       {
         /* <MenuNavigation /> */
       }








{
  /* <TransitionWrapper>
                  <TransitionGroup className="transition-group">
                    <CSSTransition
                      
                      timeout={{ enter: 3000, exit: 3000 }}
                      classNames="fade"
                    >
                      <section className="route-section">
                        <Switch location={location}>
                          <Route exact path="/" component={Vegeloper} />
                          <Route path="/test" component={TestPage} />
                          <Route path="/vegeloper" component={Vegeloper} />
                          <Route path="/hiPal" component={HiPalPage} />
                          <Route render={() => <div>Not Found</div>} />
                        </Switch>
                      </section>
                    </CSSTransition>
                  </TransitionGroup>
                </TransitionWrapper> */
}






{
  /* 
                  <Route path="/articles/:slug" component={SingleArticlePage} />
                  <Route exact path="/hello" component={HomePage} />
                  <Route exact path="/landing" component={LandingPage} />
                  
                  <Route exact path="/test" component={TestPage} />
                  <Route exact path="/email" component={EmailMePage} />
                
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
                  /> */
}