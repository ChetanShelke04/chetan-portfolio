import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to the very top on route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Always force scroll to top on initial page load / refresh
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0);
      // If there's a hash anchor on refresh, clean it so it doesn't jump down
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('load', handleLoad);
    window.scrollTo(0, 0);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return null;
}
