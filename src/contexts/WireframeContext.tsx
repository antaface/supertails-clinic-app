import React, { createContext, useContext, useState, useEffect } from 'react';

interface WireframeContextType {
  isWireframe: boolean;
  toggleWireframe: () => void;
}

const WireframeContext = createContext<WireframeContextType | undefined>(undefined);

export const WireframeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isWireframe, setIsWireframe] = useState(true); // Start in wireframe mode

  const toggleWireframe = () => {
    setIsWireframe(prev => !prev);
  };

  useEffect(() => {
    if (isWireframe) {
      document.body.classList.add('wireframe-mode');
    } else {
      document.body.classList.remove('wireframe-mode');
    }
  }, [isWireframe]);

  return (
    <WireframeContext.Provider value={{ isWireframe, toggleWireframe }}>
      {children}
    </WireframeContext.Provider>
  );
};

export const useWireframe = () => {
  const context = useContext(WireframeContext);
  if (context === undefined) {
    throw new Error('useWireframe must be used within a WireframeProvider');
  }
  return context;
};