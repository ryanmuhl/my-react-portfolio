import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class="body">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}


      <div class="container col-sm pt-5">
        <div class="row align-items-center footer-container">
        <a class="col footer-link text-center" href="https://github.com/settings/repositories" target="_blank">GitHub</a>
        <a class="col footer-link text-center" href="https://linkedin.com/in/ryan-uhl-058372103" target="_blank">LinkedIn</a>
        <a class="col footer-link text-center" href="https://www.facebook.com/ryan.uhl.90" target="_blank">Facebook</a>
        </div>
        </div>
    </div>
    
  );
}