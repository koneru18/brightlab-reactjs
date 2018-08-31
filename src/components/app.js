import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './header';
import LoginPage from '../routes/login';
import DashboardPage from '../routes/dashboard';

const App = () => (
  <div>
    {/* <Header /> */}
    <Routes />
  </div>
);

const NoMatch = () => <h1> Page Not Found </h1>;

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/dashboard" component={DashboardPage} />
    <Route component={NoMatch}/>
  </Switch>
);

// export default App;
export default withRouter(App);
