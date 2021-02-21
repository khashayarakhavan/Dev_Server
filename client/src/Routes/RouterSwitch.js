import React, {lazy} from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Wrapper} from './RouterSwitch.styles';
import HiPalPage from "../pages/hiPal/hiPal.page";
import TestPage from "../pages/testPage/testPage.page";
import aboutMePage from "../pages/aboutMe/aboutMe.page";
import Error404Page from "../pages/404ErrorPage/error404.page";
const Vegeloper = lazy(() => import("../pages/vegeloperPage/vegeloper.page"));


function RouterSwitch({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 3000, exit: 3000 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Vegeloper} />
              <Route path="/test" component={TestPage} />
              <Route path="/vegeloper" component={Vegeloper} />
              <Route path="/hiPal" component={HiPalPage} />
              <Route path="/aboutMe" component={aboutMePage} />
              <Route children={<Error404Page />} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}


export default withRouter(RouterSwitch);
