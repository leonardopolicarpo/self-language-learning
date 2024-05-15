import { createContext, useState, useContext } from 'react';

interface ProgressContextType {
  progress: any;
  setProgress: React.Dispatch<React.SetStateAction<any>>;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

interface ProgressProviderProps {
  children: React.ReactNode;
};

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState({})

  const value = { progress, setProgress }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}