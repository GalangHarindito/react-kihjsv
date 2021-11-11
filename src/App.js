import React from 'react';
import Landing from './pages/Landing/landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Store>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </Store>
  );
}
