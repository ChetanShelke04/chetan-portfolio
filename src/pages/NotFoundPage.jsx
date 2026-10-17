import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="section-padding" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="badge" style={{ marginBottom: '16px' }}>404 Error</span>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '12px' }}>Page Not Found</h1>
        <p className="section-subtitle" style={{ maxWidth: '480px', margin: '0 auto 28px' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <Home size={16} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
