import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const HomePage = React.lazy(() => import('./components/Pages/HomePage'));
const ContactPage = React.lazy(() => import('./components/Pages/ContactPage'));
const HelpPage = React.lazy(() => import('./components/Pages/HelpPage'));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route path="/help" exact>
              <HelpPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
