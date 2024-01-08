import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollFunctionality() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on route change
  }, [pathname]);

  useLayoutEffect(() => {
    const id = window.location.hash.substring(1); // Gets the hash from the URL

    if (id) {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Scrolls to the element with the specified ID
      }
    }
  }, [pathname]);

  return null;
}

export default ScrollFunctionality;
