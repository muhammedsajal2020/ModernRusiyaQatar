import React from 'react';
import { Loader } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <Loader className="h-12 w-12 animate-spin text-primary-600 mx-auto mb-4" />
        <p className="text-primary-700 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;