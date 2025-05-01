import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-3xl font-bold text-slate-900 mt-4">Page Not Found</h2>
          <p className="mt-3 text-slate-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="btn btn-primary"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;