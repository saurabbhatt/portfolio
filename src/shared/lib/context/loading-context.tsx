import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {}
});

export const useLoading = () => useContext(LoadingContext);

interface LoadingProviderProps {
  children: ReactNode;
  initialDelay?: number;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ 
  children, 
  initialDelay = 1000 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('LoadingProvider mounted, setting timer for', initialDelay, 'ms');
    
    const timer = setTimeout(() => {
      console.log('Timer completed, setting isLoading to false');
      setIsLoading(false);
    }, initialDelay);
    
    return () => {
      console.log('Clearing loading timer');
      clearTimeout(timer);
    };
  }, [initialDelay]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}; 