import React from 'react';
import { Route, Switch } from 'react-router-dom';

// All of pages we used before user logs in
import RegisterPage from 'pages/before-login-pages/register/register.page';
import LoginPage from 'pages/before-login-pages/login/login.page';
import ConfirmEmailPage from 'pages/before-login-pages/confirm-email/confirm-email.page';
import ChangePasswordPage from 'pages/before-login-pages/change-password/change-password.page';
import LandingHomePage from 'pages/before-login-pages/landing-home/landing-home.page';
import NotFoundPage from 'pages/before-login-pages/not-found/not-found.page';
import LandingMenu from 'components/before-login-components/landing-menu/landing-menu.component';

import StudentLanding from 'pages/after-login-pages/student/student-landing/student-landing.page';

import BodyAttributes from 'components/before-login-components/body-attributes/body-attributes.component';
import DemographicPreLandingPage from 'pages/after-login-pages/student/demographic-pre-landing/demographic-pre-landing.page';

// Testing this component
import QuizSectionMaker from 'components/after-login-components/quiz-maker/quiz-section-maker/quiz-section-maker.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <>
        <BodyAttributes background='linear-gradient(to right, #0083B0, #00B4DB)' />
        {/* We use a Route as / for LandingMenu because we want to selectively render our Menu depending on the route we're in */}
        <Route path='/' component={LandingMenu} />
        <Switch>
          <Route exact path='/' component={LandingHomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route path='/registro' component={RegisterPage} />
          <Route path='/confirmacion' component={ConfirmEmailPage} />
          <Route path='/restablecer' component={ChangePasswordPage} />

          <Route path='/alumno' component={StudentLanding} />
          {/* Testing these components */}
          <Route path='/demo' component={DemographicPreLandingPage} />
          <Route path='/quiz' component={QuizSectionMaker} />

          <Route
            path='*'
            render={({ history }) => <NotFoundPage history={history} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
