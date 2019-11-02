import React from 'react';
import './styles/combain.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';

import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import SitePage from './pages/SitePage/index';
import CreateStudyPage from './pages/CreateStudyPage';
import LayoutRoute from './components/Layout/LayoutRoute';
import EmptyLayout from './components/Layout/EmptyLayout';
import Createloginpage from './pages/CreateLoginPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <LayoutRoute
          exact
          path="/createloginpage"
          layout={EmptyLayout}
          component={Createloginpage}
          />

          <MainLayout>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/profilepage" component={ProfilePage} />
            <Route path="/createstudy" component={CreateStudyPage} />
            <Route path="/sitepage" component={SitePage} />
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
