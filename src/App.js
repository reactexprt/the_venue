import React, { Component, Suspense, lazy } from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured'; // Load featured immediately for FCP

// Lazy load remaining components for better performance
const VenueInfo = lazy(() => import('./components/venue_info'));
const Nicknames = lazy(() => import('./components/nicknames'));
const Special = lazy(() => import('./components/special'));
const Highlights = lazy(() => import('./components/highlights'));
const FavoriteThings = lazy(() => import('./components/favorites'));
const Adventures = lazy(() => import('./components/adventures'));
const Dreams = lazy(() => import('./components/dreams'));
const Pricing = lazy(() => import('./components/pricing'));
const Location = lazy(() => import('./components/location'));
const Footer = lazy(() => import('./components/header_footer/Footer'));

// Skeleton loader for smoother perceived loading
const SectionSkeleton = () => (
  <div className="skeleton-section">
    <div className="skeleton-shimmer"></div>
    <div className="skeleton-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-cards">
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </div>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* Featured loads immediately for fast First Contentful Paint */}
        <Element name="featured">
          <Featured />
        </Element>

        {/* Rest of content lazy loads as user scrolls */}
        <Suspense fallback={<SectionSkeleton />}>
          <Element name="venueInfo">
            <VenueInfo />
          </Element>

          <Element name="nicknames">
            <Nicknames />
          </Element>

          <Element name="special">
            <Special />
          </Element>

          <Element name="highlights">
            <Highlights />
          </Element>

          <Element name="favoriteThings">
            <FavoriteThings />
          </Element>

          <Element name="adventures">
            <Adventures />
          </Element>

          <Element name="dreams">
            <Dreams />
          </Element>

          <Element name="favourite">
            <Pricing />
          </Element>

          <Element name="location">
            <Location />
          </Element>

          <Footer />
        </Suspense>
      </div>
    );
  }
}

export default App;
