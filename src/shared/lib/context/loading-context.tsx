import React, { createContext, useContext, useState, useEffect } from 'react';
import { Loader } from '../../ui/components/loader';
import config from '../../../config';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize loading state based on config
  const [isLoading, setIsLoading] = useState(config.features.loaderGif);

  useEffect(() => {
    // Only show loader if enabled in config
    if (config.features.loaderGif) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, config.features.loaderDuration);

      return () => clearTimeout(timer);
    }
    // Else immediately show content
    return undefined;
  }, []);

  // If loader is disabled, directly render children
  if (!config.features.loaderGif) {
    return <>{children}</>;
  }

  // Otherwise use the conditional loader approach
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? <Loader /> : children}
    </LoadingContext.Provider>
  );
}; 