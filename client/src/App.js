import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import Videos from './components/pages/videos';
import Contact from './components/pages/contact';
import AboutMe from './components/pages/aboutMe';
import Blog from './components/pages/blog';

// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />

            <Route exact path='/' component={HomePage} />
            <Route exact path='/Videos' component={Videos} />
            <Route exact path='/Blog' component={Blog} />
            <Route exact path='/AboutMe' component={AboutMe} />
            <Route exact path='/Contact' component={Contact} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
